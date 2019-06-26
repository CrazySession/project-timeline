import projectTimeline from '../img/project-timeline.jpg';
import guessthenumber from '../img/guessthenumber.jpg';
import swapiapi from '../img/swapiapi.jpg';

export const projects = [
    {
        projectnumber   : 1,
        projectName     : 'swapiApi',
        url             : 'https://crazysession.github.io/swapiapi/',
        sourceURL       : 'https://github.com/CrazySession/swapiapi',
        description     : 'Just displaying some StarWars Facts with help of an api',
        screenshots     : [ swapiapi ,'two'],
        usedTechnics    : ['HTML ','CSS ','Javascript ','React '],
        firstUpload     : '05-18-2019',
        lastUpdate      : '05-18-2019'
    },
    {
        projectnumber   : 2,
        projectName     : 'guessthenumber',
        url             : 'https://crazysession.github.io/guessthenumber/',
        sourceURL       : 'https://github.com/CrazySession/guessthenumber',
        description     : 'Little guess the number game with some random Fonts and Victory Pics',
        screenshots     : [ guessthenumber ,'two'],
        usedTechnics    : ['HTML ','CSS ','Javascript ','React ','Redux '],
        firstUpload     : '06-19-2019',
        lastUpdate      : '06-19-2019'
    },
    {
        projectnumber   : 3,
        projectName     : 'project-timeline',
        url             : '#',
        sourceURL       : 'https://github.com/CrazySession/project-timeline',
        description     : 'Timeline for all my created and deployed Projects',
        screenshots     : [ projectTimeline ,'two'],
        usedTechnics    : ['HTML ','CSS ','Bootstrap ','Javascript ','React '],
        firstUpload     : '06-26-2019',
        lastUpdate      : '06-26-2019'
    }
];