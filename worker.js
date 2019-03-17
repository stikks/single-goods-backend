var kue = require('kue');

var mailer = require('./mailer');

let queue = kue.createQueue({
    redis: {
        host: '3.87.224.155',
        port: 6379
    }
})

console.log('awaiting messages...');

// process jobs sent to queue email
// 5 max concurrent requests
queue.process('email', 5, (job, done) => {
    console.log('email messages...');
    sendEmail(job, done);
})

const sendEmail = (job, done) => {
    mailer.mailHelper(job.data.sender, job.data.subject, job.data.recipient, message).then((success) => {
        done();
    }).catch((err) => {
        if (400 <= err.status <= 499) {
            job.attempts(0, () => {
                return done(new Error(JSON.stringify(err)))
            })
        }
        return done( new Error(JSON.stringify(err)) )        
    })
}

