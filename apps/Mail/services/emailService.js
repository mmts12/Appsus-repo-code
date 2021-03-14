import { utilService } from '../../../services/utilService.js';

export const emailService = {
    query, countUnreadEmails, deleteEmail, addNewMail, markEmailRead, getEmailById,
    markEmailStared, getIdForNavigation, getDeletedEmails, markEmailReaded
}

var gEmails = getDemoEmails()
var gDeletedEmails = [];


function query() {
    return Promise.resolve(gEmails)
}
function getDeletedEmails() {
    return Promise.resolve(gDeletedEmails)
}


function getDateFormatted(timeStamp) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var date = new Date(timeStamp)
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var day = date.getDate()
    return `${hours}:${minutes} ${day} ${monthNames[date.getMonth()]}`

}

function getIdForNavigation(currId) {
    const emailIdx = gEmails.findIndex((email) => email.id === currId)
    let navId = {}
    if (gEmails[emailIdx + 1]) navId.next = gEmails[emailIdx + 1].id
    if (gEmails[emailIdx - 1]) navId.prev = gEmails[emailIdx - 1].id
    return Promise.resolve(navId);

}

function addDeletedMailTolist(id) {
    let email = _getEmailById(id)
    gDeletedEmails.push(email);
}

function deleteEmail(id) {
    addDeletedMailTolist(id)
    const emailIdx = gEmails.findIndex((email) => email.id === id)
    var emails = gEmails;
    const filteredEmails = emails.filter((email) => { return email.id !== id })
    gEmails[emailIdx].isDeleted = true;
    gEmails[emailIdx].isStar = false;
    gEmails = filteredEmails
    return Promise.resolve(filteredEmails);
}

function addNewMail(mailToAdd) {
    let newMail = {
        id: utilService.makeId(),
        senderName: mailToAdd.senderName,
        subject: mailToAdd.subject,
        body: mailToAdd.bodyTxt,
        isRead: false,
        isSent: true,
        isStar: false,
        isDeleted: false,
        sentAt: getDateFormatted(Date.now()),
        fullDate: new Date(),
        senderEmail: 'mmts12@gmail.com'
    }
    gEmails.unshift(newMail)
}

function getEmailById(mailId) {
    let email = gEmails.find((mail) => mail.id === mailId)
    return Promise.resolve(email);
}
function _getEmailById(mailId) {
    let email = gEmails.find((mail) => mail.id === mailId)
    return email;
}

function markEmailStared(id) {
    const emailIdx = gEmails.findIndex((email) => email.id === id)
    let emails = gEmails;
    emails[emailIdx].isStar = !emails[emailIdx].isStar;
    gEmails = emails;

}

function markEmailRead(markEmail) {
    const emailIdx = gEmails.findIndex((email) => email.id === markEmail.id)
    console.log(emailIdx)
    markEmail.isRead = !markEmail.isRead;
    gEmails[emailIdx] = markEmail;
    return Promise.resolve(gEmails);
}
function markEmailReaded(markEmail) {
    const emailIdx = gEmails.findIndex((email) => email.id === markEmail.id)
    markEmail.isRead = true;
    gEmails[emailIdx] = markEmail;
    return Promise.resolve(gEmails);
}



function countUnreadEmails() {
    return gEmails.reduce((acc, email) => {
        if (!email.isRead) acc += 1
        return acc
    }, 0);
    // let unreadedEmailsInPrecents = `${emails / gEmails.length * 100}%`
    // return unreadedEmailsInPrecents;
}


function getDemoEmails() {
    var emails = [
        {
            id: utilService.makeId(),
            senderName: 'LinkedIn‏',
            subject: 'Toptal is looking for: React Developer (Remote)',
            body: `
Web Developer II
Shutterfly, Inc. · Haifa, IL

Actively recruiting

PerfectaHR	
Frontend Developer
PerfectaHR · Israel

Actively recruiting

CodeValue	
Node.js Developer
CodeValue · Herzliya, IL
Actively recruiting

Frontend Developer - NEW
Ethosia · Petaẖ Tiqwa, Central, Israel

Actively recruiting

Front End Developer - Analytics group
AppsFlyer · Herzliyya, IL

Actively recruiting

Infinidat	
Frontend Developer
Infinidat · Herzliyya, IL

    
Actively recruiting

Dell	
Graduate Software Engineer
Dell · Haifa, IL

Actively recruiting
    
Fiverr	
Front End Developer
Fiverr · Tel Aviv, IL

Actively recruiting`,
            isRead: false,
            isStar: true,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1606656190000),
            fullDate: new Date(1606656190000),
            senderEmail: 'jobs-listings@linkedin.com',

        },
        {
            id: utilService.makeId(),
            senderName: 'Dropbox‏ ',
            subject: 'You deleted 1249 files from Dropbox',
            body: `
you recently deleted 1249 files from your Dropbox account. If you want these files back, 
you can still restore them until 14/1/2021. After that, they’ll be permanently deleted.

These are the files you deleted:

basics.js and 80 files from the shared folder CaNov20-ExcerciseSubmission
15/12/2020 8:57 PM using Windows 10 2009	See deleted files

And 1168 more files

Thanks,
The Dropbox Team	`,
            isRead: true,
            isStar: true,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1606569790000),
            fullDate: new Date(1606569790000),
            senderEmail: 'no-reply@dropboxmail.com‏'
        },
        {
            id: utilService.makeId(),
            senderName: 'Coursera‏ ',
            subject: 'Terms of Use and Privacy Notice Update',
            body: `
Coursera Terms of Use and Privacy Notice Update

Hello Moshiko Malka,

As part of our ongoing efforts to provide the best service to learners, customers, and partners, we will be updating some of our policies. Effective January 1, 2021, an updated Terms of Use and Privacy Notice will be in place on Coursera.

These changes reflect current standards, as well as having more transparency about the data we collect and how we use it. The updates also provide more clarity for learners to understand Coursera’s services and new product offerings.

For your convenience, here is a brief summary of the changes to each policy. We encourage you to review each one in full.
Terms of Use: Updated arbitration language and increased clarity of definitions.
Privacy Notice: Updated for increased clarity of definitions and learner processes, added new EU representative, removed Standards Contractual Clauses.
Thank you,
            `,
            isRead: false,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1606483390000),
            fullDate: new Date(1606483390000),
            senderEmail: 'no-reply@t.mail.coursera.org'
        },
        {
            id: utilService.makeId(),
            senderName: 'Skrill‏',
            subject: 'Important Updates About Skrill Fees',
            body: `
spacer
Dear Moshe,
spacer
We are writing to inform you that we are making changes to some of the Skrill Fees.

As of 22 February 2021 the following Fees shall apply:
Currency conversion Fee – 4.49% per transaction added to the Skrill wholesale exchange rates;
Withdrawal Fee from Skrill Account to a NETELLER Account – 3.49% per transaction;
International transfer send money Fee for the use of Skrill Money Transfer – up to 4.99% per transaction - applicable to international money transfers in the same send and receive currency only.
International transfer send money FX markup Fee - up to 4.99% per transaction.
You can also find the upcoming updated Skrill Fees following this link.

These changes shall apply automatically to the services Skrill provides to you on the date shown above.

If you have any questions, please contact us.

Sincerely,
            `,
            isRead: true,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1606396990000),
            fullDate: new Date(1606396990000),
            senderEmail: 'skrill@news.skrill.com'
        },
        {
            id: utilService.makeId(),
            senderName: 'The Quora Team',
            subject: 'Updates to our Terms of Service and Privacy Policy',
            body: ` 
Hello,

Quora is growing around the world and we are continuing to add features and services. 
In doing so, we are updating our Terms of Service and Privacy Policy to reflect these and other changes. 
Some key changes include additions about 
Quora’s Spaces product, more details about email digests, and more options about connecting with your contacts on Quora. 
These updated terms will go into effect on January 8, 2021, 
and your continued use of the service after that time constitutes acceptance. We encourage you to read both updated documents.
                    
Thank you for being a part of Quora.
                    
Sincerely,
The Quora Team`,
            isRead: false,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1606310590000),
            fullDate: new Date(1606310590000),
            senderEmail: 'noreply@quora.com‏'
        },
        {
            id: utilService.makeId(),
            senderName: 'Zoom Video Communications',
            subject: 'Celebrate the Holidays with Zoom!',
            body: `
Hi Zoomers,

We made it! What a rollercoaster year 2020 has been - we had to adjust to new ways of connecting, working, learning, celebrate, and more.

Thank you for choosing Zoom to be your video communications platform in 2020. It has been our privilege to help keep you connected with colleagues, customers, partners, friends, and family - and we look forward to continuing to serve your unified communications needs in 2021.

To ensure everyone has a way to celebrate the holidays, we will be lifting the 40-minute time limit for group meetings starting:
10 a.m. ET Wednesday, Dec. 23, to 6 a.m. ET Saturday, Dec. 26
10 a.m. ET on Wednesday, Dec. 30, to 6 a.m. ET on Saturday, Jan. 2
There is no action needed on your part to get the limit lifted. To get the party started, follow these steps:
Login to Zoom or Download the client
Schedule a meeting
Invite your guests
#ZoomTogether - Share your holiday gatherings with us!
Cheers to 2021 and unlimited meeting minutes!

Bes`,
            isRead: false,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1606224190000),
            fullDate: new Date(1606224190000),
            senderEmail: 'teamzoom@info.zoom.us'
        },
        {
            id: utilService.makeId(),
            senderName: 'Spotify‏ ',
            subject: 'Welcome back',
            body: `

This link is valid for 4 hours.

Don’t know why you’re getting this email?

We sent this email to help you log in to your Spotify account.

If you didn’t try to log in to your account or request this email, don’t worry, your email address may have been entered by mistake. You can simply ignore or delete this email, and use your existing password to log in.

Happy listening!

The team at Spotify`,
            isRead: false,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1606137790000),
            fullDate: new Date(1606137790000),
            senderEmail: 'no-reply@spotify.com‏'
        },
        {
            id: utilService.makeId(),
            senderName: 'Introversion Software ',
            subject: 'Chris Delay Master Failure Class',
            body: `


 
Episode 1 - Order of Magnitude


Behind every great video game comes a plethora of ideas, missteps dead ends and almost-made-its. Usually these embryonic prototypes get dumped in an archive and left to digitally rot, cursed to never see the light of day or feel the loving caress of a players mouse. Until today....

Watch Mark and Chris dissect what it means to fail when trying to make a game, navigate the creative maze, meet with triumph and disaster and treat those two imposters just the same and remember, there is light at the end of the tunnel.

If watching Mark and Chris isn't enough to get your rocks off then you can even play these buggy, broken, well conceived, but ultimately doomed pre-alpha builds below. We're asking for 5 bucks, but you can pay more if you want in the knowledge that every penny we make will go to War Child.

To kick things off we look at Order of Magnitude, an epic attempt to re-create Factorio in Space starting with a small colony on the moon and ending in a Dyson sphere - now what could possible go wrong with that…
    
Find out more by visiting:

https://www.introversion.co.uk/prototypes/
            `,
            isRead: false,
            isStar: false,
            isSent: true,
            isDeleted: false,
            sentAt: getDateFormatted(1606054990000),
            fullDate: new Date(1606054990000),
            senderEmail: 'support@introversion.co.uk'
        },
        {
            id: utilService.makeId(),
            senderName: 'STACK OVERFLOW ',
            subject: 'Can\'t type in react Input Text Field - onChange not working properly',
            body: `       
Add an id property of value “email” to your email input and change id value “inputPassword” to just “password”.

This is so that [event.target.id] dynamic property key resolves values in your change handler matches the property names of “email” and “password” of your components state structure.

Otherwise currently, you are setting state of inputPassword instead of password, but pointing the inputs controlled value property to password which isn’t being updated because of the mismatch. Also, email doesn’t have a visible id property so that would evaluate as undefined in terms of event.target.id.

Hopefully that helps!
            `,
            isRead: false,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1603203790000),
            fullDate: new Date(1603203790000),
            senderEmail: 'https://stackoverflow.com/@introversion.co.uk'
        },
        {
            id: utilService.makeId(),
            senderName: 'eBay‏  ',
            subject: 'Help us protect your account',
            body: `       

Protect your account	
Get a higher level of protection
Hi moshe,
It's been more than a year since you last updated your personal info.
Keeping your personal info up to date can help better protect your account.
Sound like a good idea? All you have to do is go to eBay and take a look at your personal info to confirm that it's still correct.
If you updated your personal info recently, please ignore this remind
            `,
            isRead: false,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1602771790000),
            fullDate: new Date(1602771790000),
            senderEmail: 'ebay@ebay.com'
        },
        {
            id: utilService.makeId(),
            senderName: 'Mailchimp Legal‏  ',
            subject: 'An important update about changes to our policies',
            body: `       
Hello!

We're writing to let you know about some important changes we’re making to our Standard Terms of Use (STOU) and Data Processing Addendum (DPA). These changes are effective October 28, 2020 and will automatically become part of our contract with you. We encourage you to review these changes at your earliest convenience.

First, we’ve made several improvements to address regulatory changes following the recent invalidation of the Privacy Shield. You’ll find more details about these changes in the bulleted list below.

We’ve also updated Section 17 of our STOU to clarify what kinds of Content are prohibited for distribution using the Mailchimp platform. Additionally, we’ve clarified that we may enforce our STOU or Acceptable Use Policy (AUP) by issuing a warning to, or suspending or terminating an account.

Finally, we’ve added language to Section 39 of our STOU clarifying our use of Beta Services, which are products released in a limited capacity for testing purposes.

Here’s more information on the changes and improvements we've made:

We’ve added language clarifying our use of Beta Services. In the course of doing business, we release certain features that are identified as beta, pilot, or preview services. These Beta Services are provided for testing and evaluation purposes and may not be as reliable as other features of our Service (Section 39 of STOU).
We’ve updated our language to further clarify our Rules (Section 17 of STOU), which state that Mailchimp does not allow the distribution of Content that is, in our sole discretion, materially false, inaccurate, or misleading in a way that could deceive or confuse others about important events, topics, or circumstances.
We’ve incorporated the Standard Contractual Clauses (SCCs) for controllers, which apply to those instances when we transfer and process EU data as a controller (e.g., for billing, administrative, and other purposes) (Section 15 of STOU).
We've provided additional clarity around when the DPA forms part of our contract with you (Section 20 of STOU).
We've updated the DPA to include the SCCs for processors in full (Annex C). Although the SCCs already formed part of our DPA, including them in full helps us better understand our respective obligations when transferring EU data under the SCCs.
Finally, we've made some other important changes to address EU data export compliance. For example, we’ve included additional information clarifying our commitments to you about how we respond to government data access requests (Annex D of DPA).
You can find out more about Mailchimp’s data export compliance here. As always, if you have any questions about these changes, please feel free to contact us directly at legal@mailchimp.com.
Thanks for being a Mailchimp customer. 

Best regards,
The Mailchimp Legal Team
            `,
            isRead: false,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1602339790000),
            fullDate: new Date(1602339790000),
            senderEmail: 'legalnotice@mailchimp.com'
        },
        {
            id: utilService.makeId(),
            senderName: 'nortech-platform.com',
            subject: 'Congratulations! Registration Complete on nortech-platform.com',
            body: `       

Welcome to nortech-platform.com.
This platform will set a spotlight on you as part of the Northern Tech ecosystem.
Your company has been approved and you are on the map!
_______________________________________
Feel free to contact our team anytime about any issue revolving this platform:
nortechdevteam@gmail.com
+972-502670758 | Yaal L.
+972-545769399 | Sharon G.
Thank You!
            `,
            isRead: false,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1602336190000),
            fullDate: new Date(1602336190000),
            senderEmail: 'nortechdevteam@gmail.com'
        },
        {
            id: utilService.makeId(),
            senderName: 'Check Point Security Academy 2020',
            subject: 'Confirm your account for Check Point Security Academy 2020',
            body: `       

Hi there,

Thanks for signing up to the Check Point Security Academy website.
On our website you can find all the information you need about our upcoming course and the challenges that you need to solve to join our class of 2020 and become the ultimate ninja.
Do you think you have what it takes? Come and show us!

Please click the following link to confirm your email address for Check Point Security Academy 2020:
https://csa.checkpoint.com/confirm/Im1tdHMxMkBnbWFpbC5jb20i.XykD5g.hDZ33QeuDqzN8i97uP58h8IJvAM

Questions? Contact us anytime at csa@checkpoint.com
                  
            `,
            isRead: false,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1601558590000),
            fullDate: new Date(1601558590000),
            senderEmail: 'no-reply@csa-challenge.com'
        }
    ]
    return emails
}

