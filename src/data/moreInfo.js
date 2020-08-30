import ep1 from '../imgs/moreInfo/extraPickles/1home.png'
import ep1p5 from '../imgs/moreInfo/extraPickles/1.5login.png'
import ep2 from '../imgs/moreInfo/extraPickles/2dashred.png'
import ep3 from '../imgs/moreInfo/extraPickles/3modalred.png'
import ep4 from '../imgs/moreInfo/extraPickles/4addred.png'
import ep5 from '../imgs/moreInfo/extraPickles/5add.png'
import ep6 from '../imgs/moreInfo/extraPickles/6item.png'
import ep7 from '../imgs/moreInfo/extraPickles/7add.png'
import ep8 from '../imgs/moreInfo/extraPickles/8add.png'
import ep9 from '../imgs/moreInfo/extraPickles/9friendred.png'
import ep10 from '../imgs/moreInfo/extraPickles/10profilered.png'



let moreInfo = [
    {
        id: 0,
        letter: "E",
        title: "Extra Pickles",
        subtitle: "Step by step user flow",
        steps: [
            {
                src: ep1,
                desc: 'The mobile home page. Open up the hamburger or tap "Get Started" to sign up.'
            },
            {
                src: ep1p5,
                desc: 'Login and sign up with authentication through Okta.'
            },
            {
                src: ep2,
                desc: 'The dashboard. See Lists and Friends you\'ve added and tap the green plus to add more.'
            },
            {
                src: ep3,
                desc: 'Tap on the green plus and it opens a modal where you can enter a new list name.'
            },
            {
                src: ep4,
                desc: 'Add a new list name, optionally with an emoji for flair 🎉.'
            },
            {
                src: ep5,
                desc: 'The new list is now added to your dashboard!'
            },
            {
                src: ep6,
                desc: 'You can now proceed to add items to this list, indicating your preferred order at that establishment.'
            },
            {
                src: ep7,
                desc: 'After adding the first item, the form stays open, so you can easily add more than one item at a time.'
            },
            {
                src: ep8,
                desc: 'When you are done adding items, close the form and the completed list is shown. You can edit the list name or item by tapping the adjacent icons at any time.'
            },
            {
                src: ep9,
                desc: 'The main benefit of adding lists is so your friends can see your regular orders! When you tap a friend\'s name you are taken to their lists and can search to find the one you are looking for.'
            },
            {
                src: ep10,
                desc: 'Authentication through Okta means that your username and profile image can be edited at any time, and will update on your friends dashboards too.'
            }
        ]
    },
    {
        id: 14,
        letter: "S",
        title: "Story Squad FDSC",
        subtitle: "Step by step user flow",
        steps: []
    }
]

export default moreInfo