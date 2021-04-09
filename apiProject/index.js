const express = require('express');

const app = express();
const cors = require('cors')

app.use(cors());

app.use(express.json())


app.get('/episodes', (req,res) => {
    res.send(episodes)
})

app.get('/characters', (req,res) => {
    res.send(characters)
})
app.delete('/characters/:id', (req,res) => {
    characters = characters.reduce((acc, next) => {
        if (next.id == req.params.id) return acc
        else return [...acc, next]
    },[]);
    episodes = episodes.map(e => {
        let x = e 
        x.characters = x.characters.filter(y => y != req.params.id)
        return x
    })
    res.send(true)
})

app.delete('/episodes/:id/:charid', (req, res) => {
    episodes = episodes.reduce((acc, next) => {
        if (next.id == req.params.id) {
            next.characters = next.characters.reduce((accum, nxt) => {
                if (nxt != req.params.charid) return [...accum, nxt]
                else return accum
            },[])
        }
        return [...acc, next]
    },[])
    res.send(true)
})

app.delete('/episodes/:id', (req, res) => {
    episodes = episodes.reduce((acc, next) => {
        if (next.id == req.params.id) {
            return [...acc]
        } else return [...acc, next]
    },[])
    res.send(true)
})



app.put('/episodes/:id', (req,res) => {
    let body = req.body
    episodes = episodes.reduce((acc,next) => {
        if (next.id == body.id) {
            return [...acc, {...next, ...body}]
        } else return [...acc, next]
    },[])
    res.send(true)
})

app.put('/characters/:id', (req,res) => {

    let body = req.body
    characters = characters.reduce((acc,next) => {
        if (next.id == body.id) {
            return [...acc, {...next, ...body}]
        } else return [...acc, next]
    },[])
    res.send(true)
})

app.post('/characters', (req,res) => {
    let char = req.body
    char.id = characters[characters.length - 1].id + 1
    characters = [...characters, char]
    res.send({id: char.id})
})

app.post('/episodes', (req,res) => {
    let ep = req.body;
    let id = episodes[episodes.length - 1].id +1
    episodes = [...episodes, {...ep, id: id}]
    res.send({id: id})
})

app.listen(3210,()=>console.log('api listening on port 3210'))


let characters = [
    {
        "created": "2017-11-04T18:48:46.250Z",
        "episode": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41
        ],
        "gender": "Male",
        "id": 1,
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Rick Sanchez",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/1"
    },
    {
        "created": "2017-11-04T18:50:21.651Z",
        "episode": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41
        ],
        "gender": "Male",
        "id": 2,
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Morty Smith",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/2"
    },
    {
        "created": "2017-11-04T19:09:56.428Z",
        "episode": [
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            38,
            39,
            40,
            41
        ],
        "gender": "Female",
        "id": 3,
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Summer Smith",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/3"
    },
    {
        "created": "2017-11-04T19:22:43.665Z",
        "episode": [
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            14,
            15,
            16,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            38,
            39,
            40,
            41
        ],
        "gender": "Female",
        "id": 4,
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Beth Smith",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/4"
    },
    {
        "created": "2017-11-04T19:26:56.301Z",
        "episode": [
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            18,
            19,
            20,
            21,
            22,
            23,
            26,
            29,
            30,
            31,
            32,
            33,
            35,
            36,
            38,
            39,
            40,
            41
        ],
        "gender": "Male",
        "id": 5,
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Jerry Smith",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/5"
    },
    {
        "created": "2017-11-04T19:50:28.250Z",
        "episode": [
            27
        ],
        "gender": "Female",
        "id": 6,
        "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        "location": {
            "name": "Abadango",
            "url": "https://rickandmortyapi.com/api/location/2"
        },
        "name": "Abadango Cluster Princess",
        "origin": {
            "name": "Abadango",
            "url": "https://rickandmortyapi.com/api/location/2"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/6"
    },
    {
        "created": "2017-11-04T19:59:20.523Z",
        "episode": [
            10,
            11
        ],
        "gender": "Male",
        "id": 7,
        "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
        "location": {
            "name": "Testicle Monster Dimension",
            "url": "https://rickandmortyapi.com/api/location/21"
        },
        "name": "Abradolf Lincler",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "unknown",
        "type": "Genetic experiment",
        "url": "https://rickandmortyapi.com/api/character/7"
    },
    {
        "created": "2017-11-04T20:03:34.737Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 8,
        "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Adjudicator Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/8"
    },
    {
        "created": "2017-11-04T20:06:54.976Z",
        "episode": [
            24
        ],
        "gender": "Male",
        "id": 9,
        "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Agency Director",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/9"
    },
    {
        "created": "2017-11-04T20:19:09.017Z",
        "episode": [
            25
        ],
        "gender": "Male",
        "id": 10,
        "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
        "location": {
            "name": "Worldender's lair",
            "url": "https://rickandmortyapi.com/api/location/4"
        },
        "name": "Alan Rails",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "Superhuman (Ghost trains summoner)",
        "url": "https://rickandmortyapi.com/api/character/10"
    },
    {
        "created": "2017-11-04T20:20:20.965Z",
        "episode": [
            12
        ],
        "gender": "Male",
        "id": 11,
        "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Albert Einstein",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/11"
    },
    {
        "created": "2017-11-04T20:32:33.144Z",
        "episode": [
            3
        ],
        "gender": "Male",
        "id": 12,
        "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
        "location": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "name": "Alexander",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/12"
    },
    {
        "created": "2017-11-04T20:33:30.779Z",
        "episode": [
            31
        ],
        "gender": "unknown",
        "id": 13,
        "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Alien Googah",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/13"
    },
    {
        "created": "2017-11-04T20:51:31.373Z",
        "episode": [
            10
        ],
        "gender": "Male",
        "id": 14,
        "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Alien Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/14"
    },
    {
        "created": "2017-11-04T20:56:13.215Z",
        "episode": [
            10
        ],
        "gender": "Male",
        "id": 15,
        "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Alien Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/15"
    },
    {
        "created": "2017-11-04T21:12:45.235Z",
        "episode": [
            15
        ],
        "gender": "Male",
        "id": 16,
        "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Amish Cyborg",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Parasite",
        "url": "https://rickandmortyapi.com/api/character/16"
    },
    {
        "created": "2017-11-04T22:21:24.481Z",
        "episode": [
            3
        ],
        "gender": "Female",
        "id": 17,
        "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
        "location": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "name": "Annie",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/17"
    },
    {
        "created": "2017-11-04T22:25:29.008Z",
        "episode": [
            10,
            28
        ],
        "gender": "Male",
        "id": 18,
        "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Antenna Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "Human with antennae",
        "url": "https://rickandmortyapi.com/api/character/18"
    },
    {
        "created": "2017-11-04T22:28:13.756Z",
        "episode": [
            10
        ],
        "gender": "Male",
        "id": 19,
        "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
        "location": {
            "name": "unknown",
            "url": ""
        },
        "name": "Antenna Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "unknown",
        "type": "Human with antennae",
        "url": "https://rickandmortyapi.com/api/character/19"
    },
    {
        "created": "2017-11-04T22:34:53.659Z",
        "episode": [
            8
        ],
        "gender": "Male",
        "id": 20,
        "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Ants in my Eyes Johnson",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "unknown",
        "type": "Human with ants in his eyes",
        "url": "https://rickandmortyapi.com/api/character/20"
    },
    {
        "created": "2017-11-04T22:39:48.055Z",
        "episode": [
            10,
            22
        ],
        "gender": "Male",
        "id": 21,
        "image": "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Aqua Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Humanoid",
        "status": "unknown",
        "type": "Fish-Person",
        "url": "https://rickandmortyapi.com/api/character/21"
    },
    {
        "created": "2017-11-04T22:41:07.171Z",
        "episode": [
            10,
            22,
            28
        ],
        "gender": "Male",
        "id": 22,
        "image": "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Aqua Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Humanoid",
        "status": "unknown",
        "type": "Fish-Person",
        "url": "https://rickandmortyapi.com/api/character/22"
    },
    {
        "created": "2017-11-05T08:43:05.095Z",
        "episode": [
            13,
            19,
            21,
            25,
            26
        ],
        "gender": "Male",
        "id": 23,
        "image": "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
        "location": {
            "name": "Immortality Field Resort",
            "url": "https://rickandmortyapi.com/api/location/7"
        },
        "name": "Arcade Alien",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/23"
    },
    {
        "created": "2017-11-05T08:48:30.776Z",
        "episode": [
            16
        ],
        "gender": "Male",
        "id": 24,
        "image": "https://rickandmortyapi.com/api/character/avatar/24.jpeg",
        "location": {
            "name": "Signus 5 Expanse",
            "url": "https://rickandmortyapi.com/api/location/22"
        },
        "name": "Armagheadon",
        "origin": {
            "name": "Signus 5 Expanse",
            "url": "https://rickandmortyapi.com/api/location/22"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Cromulon",
        "url": "https://rickandmortyapi.com/api/character/24"
    },
    {
        "created": "2017-11-05T08:54:29.343Z",
        "episode": [
            23
        ],
        "gender": "Male",
        "id": 25,
        "image": "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
        "location": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "name": "Armothy",
        "origin": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "species": "unknown",
        "status": "Dead",
        "type": "Self-aware arm",
        "url": "https://rickandmortyapi.com/api/character/25"
    },
    {
        "created": "2017-11-05T08:56:46.165Z",
        "episode": [
            20
        ],
        "gender": "Female",
        "id": 26,
        "image": "https://rickandmortyapi.com/api/character/avatar/26.jpeg",
        "location": {
            "name": "Purge Planet",
            "url": "https://rickandmortyapi.com/api/location/9"
        },
        "name": "Arthricia",
        "origin": {
            "name": "Purge Planet",
            "url": "https://rickandmortyapi.com/api/location/9"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Cat-Person",
        "url": "https://rickandmortyapi.com/api/character/26"
    },
    {
        "created": "2017-11-05T08:59:07.457Z",
        "episode": [
            10,
            28
        ],
        "gender": "Male",
        "id": 27,
        "image": "https://rickandmortyapi.com/api/character/avatar/27.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Artist Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/27"
    },
    {
        "created": "2017-11-05T09:02:16.595Z",
        "episode": [
            8,
            13,
            17
        ],
        "gender": "Male",
        "id": 28,
        "image": "https://rickandmortyapi.com/api/character/avatar/28.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Attila Starwar",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/28"
    },
    {
        "created": "2017-11-05T09:06:19.644Z",
        "episode": [
            8
        ],
        "gender": "Male",
        "id": 29,
        "image": "https://rickandmortyapi.com/api/character/avatar/29.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Baby Legs",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "Human with baby legs",
        "url": "https://rickandmortyapi.com/api/character/29"
    },
    {
        "created": "2017-11-05T09:13:16.483Z",
        "episode": [
            31
        ],
        "gender": "Male",
        "id": 30,
        "image": "https://rickandmortyapi.com/api/character/avatar/30.jpeg",
        "location": {
            "name": "unknown",
            "url": ""
        },
        "name": "Baby Poopybutthole",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Poopybutthole",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/30"
    },
    {
        "created": "2017-11-05T09:15:11.286Z",
        "episode": [
            15
        ],
        "gender": "Male",
        "id": 31,
        "image": "https://rickandmortyapi.com/api/character/avatar/31.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Baby Wizard",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Parasite",
        "url": "https://rickandmortyapi.com/api/character/31"
    },
    {
        "created": "2017-11-05T09:18:04.184Z",
        "episode": [
            15
        ],
        "gender": "Female",
        "id": 32,
        "image": "https://rickandmortyapi.com/api/character/avatar/32.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Bearded Lady",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Parasite",
        "url": "https://rickandmortyapi.com/api/character/32"
    },
    {
        "created": "2017-11-05T09:21:55.595Z",
        "episode": [
            29
        ],
        "gender": "Male",
        "id": 33,
        "image": "https://rickandmortyapi.com/api/character/avatar/33.jpeg",
        "location": {
            "name": "Venzenulon 7",
            "url": "https://rickandmortyapi.com/api/location/10"
        },
        "name": "Beebo",
        "origin": {
            "name": "Venzenulon 7",
            "url": "https://rickandmortyapi.com/api/location/10"
        },
        "species": "Alien",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/33"
    },
    {
        "created": "2017-11-05T09:24:04.748Z",
        "episode": [
            8,
            13,
            17
        ],
        "gender": "Male",
        "id": 34,
        "image": "https://rickandmortyapi.com/api/character/avatar/34.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Benjamin",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Poopybutthole",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/34"
    },
    {
        "created": "2017-11-05T09:27:38.491Z",
        "episode": [
            1,
            11,
            19,
            25
        ],
        "gender": "unknown",
        "id": 35,
        "image": "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
        "location": {
            "name": "Bepis 9",
            "url": "https://rickandmortyapi.com/api/location/11"
        },
        "name": "Bepisian",
        "origin": {
            "name": "Bepis 9",
            "url": "https://rickandmortyapi.com/api/location/11"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Bepisian",
        "url": "https://rickandmortyapi.com/api/character/35"
    },
    {
        "created": "2017-11-05T09:31:08.952Z",
        "episode": [
            14
        ],
        "gender": "unknown",
        "id": 36,
        "image": "https://rickandmortyapi.com/api/character/avatar/36.jpeg",
        "location": {
            "name": "unknown",
            "url": ""
        },
        "name": "Beta-Seven",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Hivemind",
        "url": "https://rickandmortyapi.com/api/character/36"
    },
    {
        "created": "2017-11-05T09:38:22.960Z",
        "episode": [
            8
        ],
        "gender": "Female",
        "id": 37,
        "image": "https://rickandmortyapi.com/api/character/avatar/37.jpeg",
        "location": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "name": "Beth Sanchez",
        "origin": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/37"
    },
    {
        "created": "2017-11-05T09:48:44.230Z",
        "episode": [
            1,
            2,
            3,
            4,
            5,
            6,
            22
        ],
        "gender": "Female",
        "id": 38,
        "image": "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Beth Smith",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/38"
    },
    {
        "created": "2017-11-05T09:52:31.777Z",
        "episode": [
            10
        ],
        "gender": "Female",
        "id": 39,
        "image": "https://rickandmortyapi.com/api/character/avatar/39.jpeg",
        "location": {
            "name": "Earth (Evil Rick's Target Dimension)",
            "url": "https://rickandmortyapi.com/api/location/34"
        },
        "name": "Beth Smith",
        "origin": {
            "name": "Earth (Evil Rick's Target Dimension)",
            "url": "https://rickandmortyapi.com/api/location/34"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/39"
    },
    {
        "created": "2017-11-05T10:02:26.701Z",
        "episode": [
            18
        ],
        "gender": "Female",
        "id": 40,
        "image": "https://rickandmortyapi.com/api/character/avatar/40.jpeg",
        "location": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "name": "Beth's Mytholog",
        "origin": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "species": "Mythological Creature",
        "status": "Dead",
        "type": "Mytholog",
        "url": "https://rickandmortyapi.com/api/character/40"
    },
    {
        "created": "2017-11-05T10:13:45.960Z",
        "episode": [
            5
        ],
        "gender": "Female",
        "id": 41,
        "image": "https://rickandmortyapi.com/api/character/avatar/41.jpeg",
        "location": {
            "name": "Fantasy World",
            "url": "https://rickandmortyapi.com/api/location/48"
        },
        "name": "Big Boobed Waitress",
        "origin": {
            "name": "Fantasy World",
            "url": "https://rickandmortyapi.com/api/location/48"
        },
        "species": "Mythological Creature",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/41"
    },
    {
        "created": "2017-11-05T10:15:53.349Z",
        "episode": [
            22
        ],
        "gender": "Male",
        "id": 42,
        "image": "https://rickandmortyapi.com/api/character/avatar/42.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Big Head Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "unknown",
        "type": "Human with giant head",
        "url": "https://rickandmortyapi.com/api/character/42"
    },
    {
        "created": "2017-11-05T10:17:04.997Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 43,
        "image": "https://rickandmortyapi.com/api/character/avatar/43.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Big Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/43"
    },
    {
        "created": "2017-11-05T10:18:11.062Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 44,
        "image": "https://rickandmortyapi.com/api/character/avatar/44.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Body Guard Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/44"
    },
    {
        "created": "2017-11-05T10:22:27.446Z",
        "episode": [
            3
        ],
        "gender": "Male",
        "id": 45,
        "image": "https://rickandmortyapi.com/api/character/avatar/45.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Bill",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/45"
    },
    {
        "created": "2017-11-05T10:24:38.089Z",
        "episode": [
            2
        ],
        "gender": "Male",
        "id": 46,
        "image": "https://rickandmortyapi.com/api/character/avatar/46.jpeg",
        "location": {
            "name": "unknown",
            "url": ""
        },
        "name": "Bill",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Animal",
        "status": "unknown",
        "type": "Dog",
        "url": "https://rickandmortyapi.com/api/character/46"
    },
    {
        "created": "2017-11-05T11:13:36.018Z",
        "episode": [
            11,
            16,
            21,
            22,
            26
        ],
        "gender": "Male",
        "id": 47,
        "image": "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
        "location": {
            "name": "Planet Squanch",
            "url": "https://rickandmortyapi.com/api/location/35"
        },
        "name": "Birdperson",
        "origin": {
            "name": "Bird World",
            "url": "https://rickandmortyapi.com/api/location/15"
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Bird-Person",
        "url": "https://rickandmortyapi.com/api/character/47"
    },
    {
        "created": "2017-11-05T11:15:26.044Z",
        "episode": [
            22,
            28
        ],
        "gender": "Male",
        "id": 48,
        "image": "https://rickandmortyapi.com/api/character/avatar/48.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Black Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/48"
    },
    {
        "created": "2017-11-05T11:18:26.702Z",
        "episode": [
            19
        ],
        "gender": "unknown",
        "id": 49,
        "image": "https://rickandmortyapi.com/api/character/avatar/49.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Blamph",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/49"
    },
    {
        "created": "2017-11-05T11:21:43.756Z",
        "episode": [
            14
        ],
        "gender": "Male",
        "id": 50,
        "image": "https://rickandmortyapi.com/api/character/avatar/50.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Blim Blam",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Korblock",
        "url": "https://rickandmortyapi.com/api/character/50"
    },
    {
        "created": "2017-11-05T11:24:49.688Z",
        "episode": [
            19
        ],
        "gender": "Male",
        "id": 51,
        "image": "https://rickandmortyapi.com/api/character/avatar/51.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Blue Diplomat",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/51"
    },
    {
        "created": "2017-11-05T11:26:42.084Z",
        "episode": [
            23
        ],
        "gender": "Male",
        "id": 52,
        "image": "https://rickandmortyapi.com/api/character/avatar/52.jpeg",
        "location": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "name": "Blue Footprint Guy",
        "origin": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/52"
    },
    {
        "created": "2017-11-05T11:28:38.627Z",
        "episode": [
            10
        ],
        "gender": "Male",
        "id": 53,
        "image": "https://rickandmortyapi.com/api/character/avatar/53.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Blue Shirt Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/53"
    },
    {
        "created": "2017-11-05T11:31:26.348Z",
        "episode": [
            8
        ],
        "gender": "Male",
        "id": 54,
        "image": "https://rickandmortyapi.com/api/character/avatar/54.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Bobby Moynihan",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/54"
    },
    {
        "created": "2017-11-05T11:32:53.847Z",
        "episode": [
            18,
            21
        ],
        "gender": "unknown",
        "id": 55,
        "image": "https://rickandmortyapi.com/api/character/avatar/55.jpeg",
        "location": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "name": "Boobloosian",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Boobloosian",
        "url": "https://rickandmortyapi.com/api/character/55"
    },
    {
        "created": "2017-11-05T11:34:16.447Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 56,
        "image": "https://rickandmortyapi.com/api/character/avatar/56.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Bootleg Portal Chemist Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/56"
    },
    {
        "created": "2017-11-05T11:38:29.459Z",
        "episode": [
            22
        ],
        "gender": "Male",
        "id": 57,
        "image": "https://rickandmortyapi.com/api/character/avatar/57.jpeg",
        "location": {
            "name": "unknown",
            "url": ""
        },
        "name": "Borpocian",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Elephant-Person",
        "url": "https://rickandmortyapi.com/api/character/57"
    },
    {
        "created": "2017-11-05T11:40:02.554Z",
        "episode": [
            6,
            11,
            30
        ],
        "gender": "Male",
        "id": 58,
        "image": "https://rickandmortyapi.com/api/character/avatar/58.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Brad",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/58"
    },
    {
        "created": "2017-11-05T11:41:38.964Z",
        "episode": [
            7
        ],
        "gender": "Male",
        "id": 59,
        "image": "https://rickandmortyapi.com/api/character/avatar/59.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Brad Anderson",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/59"
    },
    {
        "created": "2017-11-05T11:52:45.852Z",
        "episode": [
            25
        ],
        "gender": "Female",
        "id": 60,
        "image": "https://rickandmortyapi.com/api/character/avatar/60.jpeg",
        "location": {
            "name": "unknown",
            "url": ""
        },
        "name": "Calypso",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "Superhuman",
        "url": "https://rickandmortyapi.com/api/character/60"
    },
    {
        "created": "2017-11-05T11:53:44.737Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 61,
        "image": "https://rickandmortyapi.com/api/character/avatar/61.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Campaign Manager Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/61"
    },
    {
        "created": "2017-11-05T12:06:23.217Z",
        "episode": [
            1
        ],
        "gender": "Male",
        "id": 62,
        "image": "https://rickandmortyapi.com/api/character/avatar/62.jpeg",
        "location": {
            "name": "unknown",
            "url": ""
        },
        "name": "Canklanker Thom",
        "origin": {
            "name": "Gromflom Prime",
            "url": "https://rickandmortyapi.com/api/location/19"
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Gromflomite",
        "url": "https://rickandmortyapi.com/api/character/62"
    },
    {
        "created": "2017-11-05T12:22:17.848Z",
        "episode": [
            2
        ],
        "gender": "Male",
        "id": 63,
        "image": "https://rickandmortyapi.com/api/character/avatar/63.jpeg",
        "location": {
            "name": "Mr. Goldenfold's dream",
            "url": "https://rickandmortyapi.com/api/location/18"
        },
        "name": "Centaur",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Mythological Creature",
        "status": "Alive",
        "type": "Centaur",
        "url": "https://rickandmortyapi.com/api/character/63"
    },
    {
        "created": "2017-11-05T12:25:03.541Z",
        "episode": [
            12
        ],
        "gender": "unknown",
        "id": 64,
        "image": "https://rickandmortyapi.com/api/character/avatar/64.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Chris",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Organic gun",
        "url": "https://rickandmortyapi.com/api/character/64"
    },
    {
        "created": "2017-11-30T11:02:41.935Z",
        "episode": [
            17
        ],
        "gender": "Male",
        "id": 65,
        "image": "https://rickandmortyapi.com/api/character/avatar/65.jpeg",
        "location": {
            "name": "Rick's Battery Microverse",
            "url": "https://rickandmortyapi.com/api/location/24"
        },
        "name": "Chris",
        "origin": {
            "name": "Rick's Battery Microverse",
            "url": "https://rickandmortyapi.com/api/location/24"
        },
        "species": "Humanoid",
        "status": "Alive",
        "type": "Microverse inhabitant",
        "url": "https://rickandmortyapi.com/api/character/65"
    },
    {
        "created": "2017-11-30T11:10:10.491Z",
        "episode": [
            18
        ],
        "gender": "Male",
        "id": 66,
        "image": "https://rickandmortyapi.com/api/character/avatar/66.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Coach Feratu (Balik Alistane)",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Mythological Creature",
        "status": "Dead",
        "type": "Vampire",
        "url": "https://rickandmortyapi.com/api/character/66"
    },
    {
        "created": "2017-11-30T11:13:46.785Z",
        "episode": [
            29
        ],
        "gender": "Male",
        "id": 67,
        "image": "https://rickandmortyapi.com/api/character/avatar/67.jpeg",
        "location": {
            "name": "The Menagerie",
            "url": "https://rickandmortyapi.com/api/location/25"
        },
        "name": "Collector",
        "origin": {
            "name": "The Menagerie",
            "url": "https://rickandmortyapi.com/api/location/25"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Light bulb-Alien",
        "url": "https://rickandmortyapi.com/api/character/67"
    },
    {
        "created": "2017-11-30T11:17:32.733Z",
        "episode": [
            23
        ],
        "gender": "Male",
        "id": 68,
        "image": "https://rickandmortyapi.com/api/character/avatar/68.jpeg",
        "location": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "name": "Colossus",
        "origin": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/68"
    },
    {
        "created": "2017-11-30T11:28:06.461Z",
        "episode": [
            22
        ],
        "gender": "Male",
        "id": 69,
        "image": "https://rickandmortyapi.com/api/character/avatar/69.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Commander Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/69"
    },
    {
        "created": "2017-11-30T11:31:41.926Z",
        "episode": [
            24
        ],
        "gender": "Male",
        "id": 70,
        "image": "https://rickandmortyapi.com/api/character/avatar/70.jpeg",
        "location": {
            "name": "unknown",
            "url": ""
        },
        "name": "Concerto",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Humanoid",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/70"
    },
    {
        "created": "2017-11-30T11:35:50.183Z",
        "episode": [
            22
        ],
        "gender": "unknown",
        "id": 71,
        "image": "https://rickandmortyapi.com/api/character/avatar/71.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Conroy",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Robot",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/71"
    },
    {
        "created": "2017-11-30T11:41:11.542Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 72,
        "image": "https://rickandmortyapi.com/api/character/avatar/72.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Cool Rick",
        "origin": {
            "name": "Earth (K-83)",
            "url": "https://rickandmortyapi.com/api/location/26"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/72"
    },
    {
        "created": "2017-11-30T11:43:04.217Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 73,
        "image": "https://rickandmortyapi.com/api/character/avatar/73.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Cop Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/73"
    },
    {
        "created": "2017-11-30T11:48:18.950Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 74,
        "image": "https://rickandmortyapi.com/api/character/avatar/74.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Cop Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/74"
    },
    {
        "created": "2017-11-30T12:12:57.553Z",
        "episode": [
            21
        ],
        "gender": "unknown",
        "id": 75,
        "image": "https://rickandmortyapi.com/api/character/avatar/75.jpeg",
        "location": {
            "name": "Planet Squanch",
            "url": "https://rickandmortyapi.com/api/location/35"
        },
        "name": "Courier Flap",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/75"
    },
    {
        "created": "2017-11-30T14:11:52.882Z",
        "episode": [
            15
        ],
        "gender": "Male",
        "id": 76,
        "image": "https://rickandmortyapi.com/api/character/avatar/76.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Cousin Nicky",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Parasite",
        "url": "https://rickandmortyapi.com/api/character/76"
    },
    {
        "created": "2017-11-30T14:13:17.371Z",
        "episode": [
            10
        ],
        "gender": "Male",
        "id": 77,
        "image": "https://rickandmortyapi.com/api/character/avatar/77.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Cowboy Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/77"
    },
    {
        "created": "2017-11-30T14:15:18.347Z",
        "episode": [
            10,
            28
        ],
        "gender": "Male",
        "id": 78,
        "image": "https://rickandmortyapi.com/api/character/avatar/78.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Cowboy Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/78"
    },
    {
        "created": "2017-11-30T14:18:16.899Z",
        "episode": [
            10
        ],
        "gender": "unknown",
        "id": 79,
        "image": "https://rickandmortyapi.com/api/character/avatar/79.jpeg",
        "location": {
            "name": "Hideout Planet",
            "url": "https://rickandmortyapi.com/api/location/27"
        },
        "name": "Crab Spider",
        "origin": {
            "name": "Hideout Planet",
            "url": "https://rickandmortyapi.com/api/location/27"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Animal",
        "url": "https://rickandmortyapi.com/api/character/79"
    },
    {
        "created": "2017-11-30T14:20:35.772Z",
        "episode": [
            2
        ],
        "gender": "Female",
        "id": 80,
        "image": "https://rickandmortyapi.com/api/character/avatar/80.jpeg",
        "location": {
            "name": "Mr. Goldenfold's dream",
            "url": "https://rickandmortyapi.com/api/location/18"
        },
        "name": "Creepy Little Girl",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/80"
    },
    {
        "created": "2017-11-30T14:23:41.053Z",
        "episode": [
            25
        ],
        "gender": "Male",
        "id": 81,
        "image": "https://rickandmortyapi.com/api/character/avatar/81.jpeg",
        "location": {
            "name": "Worldender's lair",
            "url": "https://rickandmortyapi.com/api/location/4"
        },
        "name": "Crocubot",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Animal",
        "status": "Dead",
        "type": "Robot-Crocodile hybrid",
        "url": "https://rickandmortyapi.com/api/character/81"
    },
    {
        "created": "2017-11-30T14:28:54.596Z",
        "episode": [
            6,
            10
        ],
        "gender": "Male",
        "id": 82,
        "image": "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Cronenberg Rick",
        "origin": {
            "name": "Cronenberg Earth",
            "url": "https://rickandmortyapi.com/api/location/12"
        },
        "species": "Cronenberg",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/82"
    },
    {
        "created": "2017-11-30T20:02:29.204Z",
        "episode": [
            6,
            10
        ],
        "gender": "Male",
        "id": 83,
        "image": "https://rickandmortyapi.com/api/character/avatar/83.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Cronenberg Morty",
        "origin": {
            "name": "Cronenberg Earth",
            "url": "https://rickandmortyapi.com/api/location/12"
        },
        "species": "Cronenberg",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/83"
    },
    {
        "created": "2017-11-30T20:41:48.080Z",
        "episode": [
            10
        ],
        "gender": "Male",
        "id": 84,
        "image": "https://rickandmortyapi.com/api/character/avatar/84.jpeg",
        "location": {
            "name": "Hideout Planet",
            "url": "https://rickandmortyapi.com/api/location/27"
        },
        "name": "Cult Leader Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/84"
    },
    {
        "created": "2017-11-30T20:49:52.133Z",
        "episode": [
            10,
            28
        ],
        "gender": "Male",
        "id": 85,
        "image": "https://rickandmortyapi.com/api/character/avatar/85.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Cyclops Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Humanoid",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/85"
    },
    {
        "created": "2017-11-30T20:53:10.382Z",
        "episode": [
            10,
            22,
            28
        ],
        "gender": "Male",
        "id": 86,
        "image": "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Cyclops Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Humanoid",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/86"
    },
    {
        "created": "2017-11-30T21:08:32.534Z",
        "episode": [
            4
        ],
        "gender": "Female",
        "id": 87,
        "image": "https://rickandmortyapi.com/api/character/avatar/87.jpeg",
        "location": {
            "name": "Zigerion's Base",
            "url": "https://rickandmortyapi.com/api/location/46"
        },
        "name": "Cynthia",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Zigerion",
        "url": "https://rickandmortyapi.com/api/character/87"
    },
    {
        "created": "2017-11-30T21:16:35.633Z",
        "episode": [
            8,
            9,
            11,
            25
        ],
        "gender": "Female",
        "id": 88,
        "image": "https://rickandmortyapi.com/api/character/avatar/88.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Cynthia",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/88"
    },
    {
        "created": "2017-12-01T10:32:08.340Z",
        "episode": [
            5
        ],
        "gender": "Male",
        "id": 89,
        "image": "https://rickandmortyapi.com/api/character/avatar/89.jpeg",
        "location": {
            "name": "Giant's Town",
            "url": "https://rickandmortyapi.com/api/location/14"
        },
        "name": "Dale",
        "origin": {
            "name": "Giant's Town",
            "url": "https://rickandmortyapi.com/api/location/14"
        },
        "species": "Mythological Creature",
        "status": "Dead",
        "type": "Giant",
        "url": "https://rickandmortyapi.com/api/character/89"
    },
    {
        "created": "2017-12-01T10:54:34.736Z",
        "episode": [
            14
        ],
        "gender": "Male",
        "id": 90,
        "image": "https://rickandmortyapi.com/api/character/avatar/90.jpeg",
        "location": {
            "name": "Unity's Planet",
            "url": "https://rickandmortyapi.com/api/location/28"
        },
        "name": "Daron Jefferson",
        "origin": {
            "name": "Unity's Planet",
            "url": "https://rickandmortyapi.com/api/location/28"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Cone-nippled alien",
        "url": "https://rickandmortyapi.com/api/character/90"
    },
    {
        "created": "2017-12-01T11:12:25.105Z",
        "episode": [
            8
        ],
        "gender": "Male",
        "id": 91,
        "image": "https://rickandmortyapi.com/api/character/avatar/91.jpeg",
        "location": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "name": "David Letterman",
        "origin": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/91"
    },
    {
        "created": "2017-12-01T11:20:51.247Z",
        "episode": [
            1,
            6
        ],
        "gender": "Male",
        "id": 92,
        "image": "https://rickandmortyapi.com/api/character/avatar/92.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Davin",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/92"
    },
    {
        "created": "2017-12-01T11:36:16.467Z",
        "episode": [
            25
        ],
        "gender": "Male",
        "id": 93,
        "image": "https://rickandmortyapi.com/api/character/avatar/93.jpeg",
        "location": {
            "name": "Dorian 5",
            "url": "https://rickandmortyapi.com/api/location/29"
        },
        "name": "Diablo Verde",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Mythological Creature",
        "status": "Dead",
        "type": "Demon",
        "url": "https://rickandmortyapi.com/api/character/93"
    },
    {
        "created": "2017-12-01T11:49:43.929Z",
        "episode": [
            22
        ],
        "gender": "Female",
        "id": 94,
        "image": "https://rickandmortyapi.com/api/character/avatar/94.jpeg",
        "location": {
            "name": "Earth (Unknown dimension)",
            "url": "https://rickandmortyapi.com/api/location/30"
        },
        "name": "Diane Sanchez",
        "origin": {
            "name": "Earth (Unknown dimension)",
            "url": "https://rickandmortyapi.com/api/location/30"
        },
        "species": "Human",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/94"
    },
    {
        "created": "2017-12-01T11:54:36.670Z",
        "episode": [
            22
        ],
        "gender": "unknown",
        "id": 95,
        "image": "https://rickandmortyapi.com/api/character/avatar/95.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Dipper and Mabel Mortys",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/95"
    },
    {
        "created": "2017-12-01T11:59:04.796Z",
        "episode": [
            3
        ],
        "gender": "unknown",
        "id": 96,
        "image": "https://rickandmortyapi.com/api/character/avatar/96.jpeg",
        "location": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "name": "Tuberculosis",
        "origin": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "species": "Disease",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/96"
    },
    {
        "created": "2017-12-01T12:00:27.028Z",
        "episode": [
            3
        ],
        "gender": "unknown",
        "id": 97,
        "image": "https://rickandmortyapi.com/api/character/avatar/97.jpeg",
        "location": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "name": "Gonorrhea",
        "origin": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "species": "Disease",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/97"
    },
    {
        "created": "2017-12-01T12:01:43.742Z",
        "episode": [
            3
        ],
        "gender": "unknown",
        "id": 98,
        "image": "https://rickandmortyapi.com/api/character/avatar/98.jpeg",
        "location": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "name": "Hepatitis A",
        "origin": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "species": "Disease",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/98"
    },
    {
        "created": "2017-12-01T12:02:00.935Z",
        "episode": [
            3
        ],
        "gender": "unknown",
        "id": 99,
        "image": "https://rickandmortyapi.com/api/character/avatar/99.jpeg",
        "location": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "name": "Hepatitis C",
        "origin": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "species": "Disease",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/99"
    },
    {
        "created": "2017-12-01T12:02:21.611Z",
        "episode": [
            3
        ],
        "gender": "unknown",
        "id": 100,
        "image": "https://rickandmortyapi.com/api/character/avatar/100.jpeg",
        "location": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "name": "Bubonic Plague",
        "origin": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "species": "Disease",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/100"
    },
    {
        "created": "2017-12-01T12:03:31.433Z",
        "episode": [
            3
        ],
        "gender": "unknown",
        "id": 101,
        "image": "https://rickandmortyapi.com/api/character/avatar/101.jpeg",
        "location": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "name": "E. Coli",
        "origin": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "species": "Disease",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/101"
    },
    {
        "created": "2017-12-01T12:21:21.357Z",
        "episode": [
            21
        ],
        "gender": "Female",
        "id": 102,
        "image": "https://rickandmortyapi.com/api/character/avatar/102.jpeg",
        "location": {
            "name": "Planet Squanch",
            "url": "https://rickandmortyapi.com/api/location/35"
        },
        "name": "Donna Gueterman",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Robot",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/102"
    },
    {
        "created": "2017-12-01T12:29:27.984Z",
        "episode": [
            10,
            22
        ],
        "gender": "Male",
        "id": 103,
        "image": "https://rickandmortyapi.com/api/character/avatar/103.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Doofus Rick",
        "origin": {
            "name": "Earth (J19\u00ce\u00b67)",
            "url": "https://rickandmortyapi.com/api/location/31"
        },
        "species": "Human",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/103"
    },
    {
        "created": "2017-12-26T12:34:36.758Z",
        "episode": [
            25
        ],
        "gender": "unknown",
        "id": 104,
        "image": "https://rickandmortyapi.com/api/character/avatar/104.jpeg",
        "location": {
            "name": "Dorian 5",
            "url": "https://rickandmortyapi.com/api/location/29"
        },
        "name": "Doom-Nomitron",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Shapeshifter",
        "url": "https://rickandmortyapi.com/api/character/104"
    },
    {
        "created": "2017-12-26T12:39:22.855Z",
        "episode": [
            19
        ],
        "gender": "Male",
        "id": 105,
        "image": "https://rickandmortyapi.com/api/character/avatar/105.jpeg",
        "location": {
            "name": "St. Gloopy Noops Hospital",
            "url": "https://rickandmortyapi.com/api/location/16"
        },
        "name": "Dr. Glip-Glop",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/105"
    },
    {
        "created": "2017-12-26T12:46:48.805Z",
        "episode": [
            13
        ],
        "gender": "Male",
        "id": 106,
        "image": "https://rickandmortyapi.com/api/character/avatar/106.jpeg",
        "location": {
            "name": "Roy: A Life Well Lived",
            "url": "https://rickandmortyapi.com/api/location/32"
        },
        "name": "Dr. Schmidt",
        "origin": {
            "name": "Roy: A Life Well Lived",
            "url": "https://rickandmortyapi.com/api/location/32"
        },
        "species": "Human",
        "status": "unknown",
        "type": "Game",
        "url": "https://rickandmortyapi.com/api/character/106"
    },
    {
        "created": "2017-12-26T12:55:58.449Z",
        "episode": [
            24,
            41
        ],
        "gender": "Female",
        "id": 107,
        "image": "https://rickandmortyapi.com/api/character/avatar/107.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Dr. Wong",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/107"
    },
    {
        "created": "2017-12-26T13:14:12.157Z",
        "episode": [
            3
        ],
        "gender": "Male",
        "id": 108,
        "image": "https://rickandmortyapi.com/api/character/avatar/108.jpeg",
        "location": {
            "name": "Anatomy Park",
            "url": "https://rickandmortyapi.com/api/location/5"
        },
        "name": "Dr. Xenon Bloom",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Humanoid",
        "status": "Dead",
        "type": "Amoeba-Person",
        "url": "https://rickandmortyapi.com/api/character/108"
    },
    {
        "created": "2017-12-26T13:17:40.686Z",
        "episode": [
            15
        ],
        "gender": "Male",
        "id": 109,
        "image": "https://rickandmortyapi.com/api/character/avatar/109.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Duck With Muscles",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Parasite",
        "url": "https://rickandmortyapi.com/api/character/109"
    },
    {
        "created": "2017-12-26T13:37:27.635Z",
        "episode": [
            23
        ],
        "gender": "Male",
        "id": 110,
        "image": "https://rickandmortyapi.com/api/character/avatar/110.jpeg",
        "location": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "name": "Eli",
        "origin": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/110"
    },
    {
        "created": "2017-12-26T13:38:47.115Z",
        "episode": [
            23
        ],
        "gender": "Female",
        "id": 111,
        "image": "https://rickandmortyapi.com/api/character/avatar/111.jpeg",
        "location": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "name": "Eli's Girlfriend",
        "origin": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/111"
    },
    {
        "created": "2017-12-26T13:40:06.005Z",
        "episode": [
            3
        ],
        "gender": "Male",
        "id": 112,
        "image": "https://rickandmortyapi.com/api/character/avatar/112.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Eric McMan",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/112"
    },
    {
        "created": "2017-12-26T13:43:29.296Z",
        "episode": [
            10
        ],
        "gender": "Male",
        "id": 113,
        "image": "https://rickandmortyapi.com/api/character/avatar/113.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Eric Stoltz Mask Morty",
        "origin": {
            "name": "Eric Stoltz Mask Earth",
            "url": "https://rickandmortyapi.com/api/location/33"
        },
        "species": "Human",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/113"
    },
    {
        "created": "2017-12-26T16:01:13.904Z",
        "episode": [
            3
        ],
        "gender": "Male",
        "id": 114,
        "image": "https://rickandmortyapi.com/api/character/avatar/114.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Ethan",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "unknown",
        "type": "Cronenberg",
        "url": "https://rickandmortyapi.com/api/character/114"
    },
    {
        "created": "2017-12-26T16:01:50.939Z",
        "episode": [
            16,
            26
        ],
        "gender": "Male",
        "id": 115,
        "image": "https://rickandmortyapi.com/api/character/avatar/115.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Ethan",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/115"
    },
    {
        "created": "2017-12-26T16:10:47.781Z",
        "episode": [
            5
        ],
        "gender": "Female",
        "id": 116,
        "image": "https://rickandmortyapi.com/api/character/avatar/116.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Evil Beth Clone",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "Clone",
        "url": "https://rickandmortyapi.com/api/character/116"
    },
    {
        "created": "2017-12-26T16:11:15.395Z",
        "episode": [
            5
        ],
        "gender": "Male",
        "id": 117,
        "image": "https://rickandmortyapi.com/api/character/avatar/117.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Evil Jerry Clone",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "Clone",
        "url": "https://rickandmortyapi.com/api/character/117"
    },
    {
        "created": "2017-12-26T16:13:41.103Z",
        "episode": [
            10,
            28
        ],
        "gender": "Male",
        "id": 118,
        "image": "https://rickandmortyapi.com/api/character/avatar/118.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Evil Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/118"
    },
    {
        "created": "2017-12-26T16:17:16.472Z",
        "episode": [
            10
        ],
        "gender": "Male",
        "id": 119,
        "image": "https://rickandmortyapi.com/api/character/avatar/119.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Evil Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Humanoid",
        "status": "Dead",
        "type": "Robot",
        "url": "https://rickandmortyapi.com/api/character/119"
    },
    {
        "created": "2017-12-26T16:24:02.059Z",
        "episode": [
            5
        ],
        "gender": "Female",
        "id": 120,
        "image": "https://rickandmortyapi.com/api/character/avatar/120.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Evil Summer Clone",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "Clone",
        "url": "https://rickandmortyapi.com/api/character/120"
    },
    {
        "created": "2017-12-26T16:41:58.391Z",
        "episode": [
            19
        ],
        "gender": "Male",
        "id": 121,
        "image": "https://rickandmortyapi.com/api/character/avatar/121.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Eyehole Man",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/121"
    },
    {
        "created": "2017-12-26T17:19:40.474Z",
        "episode": [
            13
        ],
        "gender": "Male",
        "id": 122,
        "image": "https://rickandmortyapi.com/api/character/avatar/122.jpeg",
        "location": {
            "name": "unknown",
            "url": ""
        },
        "name": "Fart",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Interdimensional gaseous being",
        "url": "https://rickandmortyapi.com/api/character/122"
    },
    {
        "created": "2017-12-26T17:22:40.315Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 123,
        "image": "https://rickandmortyapi.com/api/character/avatar/123.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Fat Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/123"
    },
    {
        "created": "2017-12-26T17:31:29.113Z",
        "episode": [
            16,
            27
        ],
        "gender": "Male",
        "id": 124,
        "image": "https://rickandmortyapi.com/api/character/avatar/124.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Father Bob",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/124"
    },
    {
        "created": "2017-12-26T17:43:58.410Z",
        "episode": [
            18,
            21,
            25
        ],
        "gender": "unknown",
        "id": 125,
        "image": "https://rickandmortyapi.com/api/character/avatar/125.jpeg",
        "location": {
            "name": "Planet Squanch",
            "url": "https://rickandmortyapi.com/api/location/35"
        },
        "name": "Flansian",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Flansian",
        "url": "https://rickandmortyapi.com/api/character/125"
    },
    {
        "created": "2017-12-26T18:45:42.593Z",
        "episode": [
            19
        ],
        "gender": "unknown",
        "id": 126,
        "image": "https://rickandmortyapi.com/api/character/avatar/126.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Fleeb",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/126"
    },
    {
        "created": "2017-12-26T19:22:48.474Z",
        "episode": [
            1
        ],
        "gender": "Male",
        "id": 127,
        "image": "https://rickandmortyapi.com/api/character/avatar/127.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Frank Palicky",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/127"
    },
    {
        "created": "2017-12-26T19:24:56.679Z",
        "episode": [
            15
        ],
        "gender": "Male",
        "id": 128,
        "image": "https://rickandmortyapi.com/api/character/avatar/128.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Frankenstein's Monster",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Parasite",
        "url": "https://rickandmortyapi.com/api/character/128"
    },
    {
        "created": "2017-12-26T19:30:02.242Z",
        "episode": [
            8,
            13,
            17
        ],
        "gender": "Female",
        "id": 129,
        "image": "https://rickandmortyapi.com/api/character/avatar/129.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Fulgora",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/129"
    },
    {
        "created": "2017-12-26T19:49:41.160Z",
        "episode": [
            21
        ],
        "gender": "Male",
        "id": 130,
        "image": "https://rickandmortyapi.com/api/character/avatar/130.jpeg",
        "location": {
            "name": "unknown",
            "url": ""
        },
        "name": "Galactic Federation President",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Gromflomite",
        "url": "https://rickandmortyapi.com/api/character/130"
    },
    {
        "created": "2017-12-26T19:54:43.476Z",
        "episode": [
            13,
            18,
            21
        ],
        "gender": "Male",
        "id": 131,
        "image": "https://rickandmortyapi.com/api/character/avatar/131.jpeg",
        "location": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "name": "Gar Gloonch",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Zombodian",
        "url": "https://rickandmortyapi.com/api/character/131"
    },
    {
        "created": "2017-12-26T20:02:38.033Z",
        "episode": [
            18
        ],
        "gender": "Male",
        "id": 132,
        "image": "https://rickandmortyapi.com/api/character/avatar/132.jpeg",
        "location": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "name": "Gar's Mytholog",
        "origin": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "species": "Mythological Creature",
        "status": "Dead",
        "type": "Mytholog",
        "url": "https://rickandmortyapi.com/api/character/132"
    },
    {
        "created": "2017-12-26T20:30:45.943Z",
        "episode": [
            13,
            19,
            21
        ],
        "gender": "Male",
        "id": 133,
        "image": "https://rickandmortyapi.com/api/character/avatar/133.jpeg",
        "location": {
            "name": "unknown",
            "url": ""
        },
        "name": "Garblovian",
        "origin": {
            "name": "Glaagablaaga",
            "url": "https://rickandmortyapi.com/api/location/36"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Garblovian",
        "url": "https://rickandmortyapi.com/api/character/133"
    },
    {
        "created": "2017-12-26T20:36:54.577Z",
        "episode": [
            8
        ],
        "gender": "Male",
        "id": 134,
        "image": "https://rickandmortyapi.com/api/character/avatar/134.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Garmanarnar",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/134"
    },
    {
        "created": "2017-12-26T20:51:43.614Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 135,
        "image": "https://rickandmortyapi.com/api/character/avatar/135.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Garment District Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/135"
    },
    {
        "created": "2017-12-27T17:59:59.058Z",
        "episode": [
            8,
            13
        ],
        "gender": "Male",
        "id": 136,
        "image": "https://rickandmortyapi.com/api/character/avatar/136.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Gazorpazorpfield",
        "origin": {
            "name": "Gazorpazorp",
            "url": "https://rickandmortyapi.com/api/location/40"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Gazorpian",
        "url": "https://rickandmortyapi.com/api/character/136"
    },
    {
        "created": "2017-12-27T18:14:57.885Z",
        "episode": [
            26
        ],
        "gender": "Male",
        "id": 137,
        "image": "https://rickandmortyapi.com/api/character/avatar/137.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Gene",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/137"
    },
    {
        "created": "2017-12-27T18:22:18.387Z",
        "episode": [
            16
        ],
        "gender": "Male",
        "id": 138,
        "image": "https://rickandmortyapi.com/api/character/avatar/138.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "General Nathan",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/138"
    },
    {
        "created": "2017-12-27T18:41:03.124Z",
        "episode": [
            20
        ],
        "gender": "Male",
        "id": 139,
        "image": "https://rickandmortyapi.com/api/character/avatar/139.jpeg",
        "location": {
            "name": "Purge Planet",
            "url": "https://rickandmortyapi.com/api/location/9"
        },
        "name": "General Store Owner",
        "origin": {
            "name": "Purge Planet",
            "url": "https://rickandmortyapi.com/api/location/9"
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Cat-Person",
        "url": "https://rickandmortyapi.com/api/character/139"
    },
    {
        "created": "2017-12-27T18:47:44.566Z",
        "episode": [
            23
        ],
        "gender": "Male",
        "id": 140,
        "image": "https://rickandmortyapi.com/api/character/avatar/140.jpeg",
        "location": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "name": "Genital Washer",
        "origin": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/140"
    },
    {
        "created": "2017-12-27T19:14:14.545Z",
        "episode": [
            15
        ],
        "gender": "Genderless",
        "id": 141,
        "image": "https://rickandmortyapi.com/api/character/avatar/141.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Ghost in a Jar",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Parasite",
        "url": "https://rickandmortyapi.com/api/character/141"
    },
    {
        "created": "2017-12-27T20:16:32.187Z",
        "episode": [
            26
        ],
        "gender": "unknown",
        "id": 142,
        "image": "https://rickandmortyapi.com/api/character/avatar/142.jpeg",
        "location": {
            "name": "Resort Planet",
            "url": "https://rickandmortyapi.com/api/location/37"
        },
        "name": "Gibble Snake",
        "origin": {
            "name": "Resort Planet",
            "url": "https://rickandmortyapi.com/api/location/37"
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Animal",
        "url": "https://rickandmortyapi.com/api/character/142"
    },
    {
        "created": "2017-12-27T20:37:26.134Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 143,
        "image": "https://rickandmortyapi.com/api/character/avatar/143.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Glasses Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/143"
    },
    {
        "created": "2017-12-29T10:37:48.319Z",
        "episode": [
            1
        ],
        "gender": "Male",
        "id": 144,
        "image": "https://rickandmortyapi.com/api/character/avatar/144.jpeg",
        "location": {
            "name": "Interdimensional Customs",
            "url": "https://rickandmortyapi.com/api/location/38"
        },
        "name": "Glenn",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Gromflomite",
        "url": "https://rickandmortyapi.com/api/character/144"
    },
    {
        "created": "2017-12-29T11:03:43.118Z",
        "episode": [
            8
        ],
        "gender": "Male",
        "id": 145,
        "image": "https://rickandmortyapi.com/api/character/avatar/145.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Glenn",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "Eat shiter-Person",
        "url": "https://rickandmortyapi.com/api/character/145"
    },
    {
        "created": "2017-12-29T11:28:29.380Z",
        "episode": [
            18
        ],
        "gender": "Male",
        "id": 146,
        "image": "https://rickandmortyapi.com/api/character/avatar/146.jpeg",
        "location": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "name": "Glexo Slim Slom",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/146"
    },
    {
        "created": "2017-12-29T11:38:29.578Z",
        "episode": [
            29
        ],
        "gender": "Male",
        "id": 147,
        "image": "https://rickandmortyapi.com/api/character/avatar/147.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Gobo",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/147"
    },
    {
        "created": "2017-12-29T11:40:25.135Z",
        "episode": [
            18
        ],
        "gender": "Female",
        "id": 148,
        "image": "https://rickandmortyapi.com/api/character/avatar/148.jpeg",
        "location": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "name": "Goddess Beth",
        "origin": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "species": "Mythological Creature",
        "status": "unknown",
        "type": "Goddess",
        "url": "https://rickandmortyapi.com/api/character/148"
    },
    {
        "created": "2017-12-29T11:44:00.169Z",
        "episode": [
            29
        ],
        "gender": "Male",
        "id": 149,
        "image": "https://rickandmortyapi.com/api/character/avatar/149.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Gordon Lunas",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/149"
    },
    {
        "created": "2017-12-29T12:02:33.550Z",
        "episode": [
            22
        ],
        "gender": "Male",
        "id": 150,
        "image": "https://rickandmortyapi.com/api/character/avatar/150.jpeg",
        "location": {
            "name": "Galactic Federation Prison",
            "url": "https://rickandmortyapi.com/api/location/39"
        },
        "name": "Cornvelious Daniel",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Gromflomite",
        "url": "https://rickandmortyapi.com/api/character/150"
    },
    {
        "created": "2017-12-29T12:31:50.388Z",
        "episode": [
            7
        ],
        "gender": "Female",
        "id": 151,
        "image": "https://rickandmortyapi.com/api/character/avatar/151.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Gwendolyn",
        "origin": {
            "name": "Gazorpazorp",
            "url": "https://rickandmortyapi.com/api/location/40"
        },
        "species": "Robot",
        "status": "unknown",
        "type": "Gazorpian reproduction robot",
        "url": "https://rickandmortyapi.com/api/character/151"
    },
    {
        "created": "2017-12-29T15:20:16.842Z",
        "episode": [
            10,
            22
        ],
        "gender": "Male",
        "id": 152,
        "image": "https://rickandmortyapi.com/api/character/avatar/152.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Hammerhead Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Humanoid",
        "status": "unknown",
        "type": "Hammerhead-Person",
        "url": "https://rickandmortyapi.com/api/character/152"
    },
    {
        "created": "2017-12-29T15:27:54.281Z",
        "episode": [
            8,
            19
        ],
        "gender": "unknown",
        "id": 153,
        "image": "https://rickandmortyapi.com/api/character/avatar/153.jpeg",
        "location": {
            "name": "Hamster in Butt World",
            "url": "https://rickandmortyapi.com/api/location/41"
        },
        "name": "Hamster In Butt",
        "origin": {
            "name": "Hamster in Butt World",
            "url": "https://rickandmortyapi.com/api/location/41"
        },
        "species": "Animal",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/153"
    },
    {
        "created": "2017-12-29T15:32:05.287Z",
        "episode": [
            15
        ],
        "gender": "Male",
        "id": 154,
        "image": "https://rickandmortyapi.com/api/character/avatar/154.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Hamurai",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Parasite",
        "url": "https://rickandmortyapi.com/api/character/154"
    },
    {
        "created": "2017-12-29T15:41:18.773Z",
        "episode": [
            6
        ],
        "gender": "Male",
        "id": 155,
        "image": "https://rickandmortyapi.com/api/character/avatar/155.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Harold",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Cronenberg",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/155"
    },
    {
        "created": "2017-12-29T15:44:40.083Z",
        "episode": [
            23
        ],
        "gender": "Male",
        "id": 156,
        "image": "https://rickandmortyapi.com/api/character/avatar/156.jpeg",
        "location": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "name": "Hemorrhage",
        "origin": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/156"
    },
    {
        "created": "2017-12-29T15:47:57.352Z",
        "episode": [
            8
        ],
        "gender": "Genderless",
        "id": 157,
        "image": "https://rickandmortyapi.com/api/character/avatar/157.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Hole in the Wall Where the Men Can See it All",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "unknown",
        "status": "unknown",
        "type": "Hole",
        "url": "https://rickandmortyapi.com/api/character/157"
    },
    {
        "created": "2017-12-29T15:53:48.952Z",
        "episode": [
            1
        ],
        "gender": "unknown",
        "id": 158,
        "image": "https://rickandmortyapi.com/api/character/avatar/158.jpeg",
        "location": {
            "name": "Interdimensional Customs",
            "url": "https://rickandmortyapi.com/api/location/38"
        },
        "name": "Hookah Alien",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Tuskfish",
        "url": "https://rickandmortyapi.com/api/character/158"
    },
    {
        "created": "2017-12-29T16:03:28.792Z",
        "episode": [
            17
        ],
        "gender": "Male",
        "id": 159,
        "image": "https://rickandmortyapi.com/api/character/avatar/159.jpeg",
        "location": {
            "name": "Earth (Giant Telepathic Spiders Dimension)",
            "url": "https://rickandmortyapi.com/api/location/42"
        },
        "name": "Hunter",
        "origin": {
            "name": "Earth (Giant Telepathic Spiders Dimension)",
            "url": "https://rickandmortyapi.com/api/location/42"
        },
        "species": "Human",
        "status": "Dead",
        "type": "Clone",
        "url": "https://rickandmortyapi.com/api/character/159"
    },
    {
        "created": "2017-12-29T16:07:04.040Z",
        "episode": [
            17
        ],
        "gender": "Male",
        "id": 160,
        "image": "https://rickandmortyapi.com/api/character/avatar/160.jpeg",
        "location": {
            "name": "Earth (Giant Telepathic Spiders Dimension)",
            "url": "https://rickandmortyapi.com/api/location/42"
        },
        "name": "Hunter's Father",
        "origin": {
            "name": "Earth (Giant Telepathic Spiders Dimension)",
            "url": "https://rickandmortyapi.com/api/location/42"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/160"
    },
    {
        "created": "2017-12-29T16:10:40.290Z",
        "episode": [
            16
        ],
        "gender": "Female",
        "id": 161,
        "image": "https://rickandmortyapi.com/api/character/avatar/161.jpeg",
        "location": {
            "name": "Alphabetrium",
            "url": "https://rickandmortyapi.com/api/location/43"
        },
        "name": "Hydrogen-F",
        "origin": {
            "name": "Alphabetrium",
            "url": "https://rickandmortyapi.com/api/location/43"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Alphabetrian",
        "url": "https://rickandmortyapi.com/api/character/161"
    },
    {
        "created": "2017-12-29T16:42:59.207Z",
        "episode": [
            16
        ],
        "gender": "Male",
        "id": 162,
        "image": "https://rickandmortyapi.com/api/character/avatar/162.jpeg",
        "location": {
            "name": "Alphabetrium",
            "url": "https://rickandmortyapi.com/api/location/43"
        },
        "name": "Ice-T",
        "origin": {
            "name": "Alphabetrium",
            "url": "https://rickandmortyapi.com/api/location/43"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Alphabetrian",
        "url": "https://rickandmortyapi.com/api/character/162"
    },
    {
        "created": "2017-12-29T16:46:41.345Z",
        "episode": [
            18
        ],
        "gender": "Male",
        "id": 163,
        "image": "https://rickandmortyapi.com/api/character/avatar/163.jpeg",
        "location": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "name": "Ideal Jerry",
        "origin": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "species": "Mythological Creature",
        "status": "Dead",
        "type": "Mytholog",
        "url": "https://rickandmortyapi.com/api/character/163"
    },
    {
        "created": "2017-12-29T17:03:08.645Z",
        "episode": [
            10
        ],
        "gender": "Male",
        "id": 164,
        "image": "https://rickandmortyapi.com/api/character/avatar/164.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Insurance Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/164"
    },
    {
        "created": "2017-12-29T17:05:15.514Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 165,
        "image": "https://rickandmortyapi.com/api/character/avatar/165.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Investigator Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/165"
    },
    {
        "created": "2017-12-29T17:06:28.325Z",
        "episode": [
            31
        ],
        "gender": "Male",
        "id": 166,
        "image": "https://rickandmortyapi.com/api/character/avatar/166.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Invisi-trooper",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/166"
    },
    {
        "created": "2017-12-29T17:07:59.024Z",
        "episode": [
            24
        ],
        "gender": "unknown",
        "id": 167,
        "image": "https://rickandmortyapi.com/api/character/avatar/167.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Izzy",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Animal",
        "status": "Alive",
        "type": "Cat",
        "url": "https://rickandmortyapi.com/api/character/167"
    },
    {
        "created": "2017-12-29T17:14:03.430Z",
        "episode": [
            7
        ],
        "gender": "Female",
        "id": 168,
        "image": "https://rickandmortyapi.com/api/character/avatar/168.jpeg",
        "location": {
            "name": "Gazorpazorp",
            "url": "https://rickandmortyapi.com/api/location/40"
        },
        "name": "Jackie",
        "origin": {
            "name": "Gazorpazorp",
            "url": "https://rickandmortyapi.com/api/location/40"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Gazorpian",
        "url": "https://rickandmortyapi.com/api/character/168"
    },
    {
        "created": "2017-12-29T17:20:52.037Z",
        "episode": [
            3,
            15
        ],
        "gender": "Male",
        "id": 169,
        "image": "https://rickandmortyapi.com/api/character/avatar/169.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Jacob",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/169"
    },
    {
        "created": "2017-12-29T17:22:17.707Z",
        "episode": [
            27
        ],
        "gender": "Female",
        "id": 170,
        "image": "https://rickandmortyapi.com/api/character/avatar/170.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Jacqueline",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/170"
    },
    {
        "created": "2017-12-29T17:25:38.138Z",
        "episode": [
            24
        ],
        "gender": "Male",
        "id": 171,
        "image": "https://rickandmortyapi.com/api/character/avatar/171.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Jaguar",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/171"
    },
    {
        "created": "2017-12-29T17:30:20.654Z",
        "episode": [
            16
        ],
        "gender": "Male",
        "id": 172,
        "image": "https://rickandmortyapi.com/api/character/avatar/172.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Jamey",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/172"
    },
    {
        "created": "2017-12-29T17:33:23.972Z",
        "episode": [
            19
        ],
        "gender": "Male",
        "id": 173,
        "image": "https://rickandmortyapi.com/api/character/avatar/173.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Jan-Michael Vincent",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/173"
    },
    {
        "created": "2017-12-29T17:50:19.991Z",
        "episode": [
            13
        ],
        "gender": "Male",
        "id": 174,
        "image": "https://rickandmortyapi.com/api/character/avatar/174.jpeg",
        "location": {
            "name": "Jerryboree",
            "url": "https://rickandmortyapi.com/api/location/44"
        },
        "name": "Jerry 5-126",
        "origin": {
            "name": "Earth (5-126)",
            "url": "https://rickandmortyapi.com/api/location/17"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/174"
    },
    {
        "created": "2017-12-29T18:07:17.610Z",
        "episode": [
            1,
            2,
            3,
            4,
            5,
            6,
            22
        ],
        "gender": "Male",
        "id": 175,
        "image": "https://rickandmortyapi.com/api/character/avatar/175.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Jerry Smith",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/175"
    },
    {
        "created": "2017-12-29T18:25:11.930Z",
        "episode": [
            8
        ],
        "gender": "Male",
        "id": 176,
        "image": "https://rickandmortyapi.com/api/character/avatar/176.jpeg",
        "location": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "name": "Celebrity Jerry",
        "origin": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/176"
    },
    {
        "created": "2017-12-29T18:28:19.424Z",
        "episode": [
            10
        ],
        "gender": "Male",
        "id": 177,
        "image": "https://rickandmortyapi.com/api/character/avatar/177.jpeg",
        "location": {
            "name": "Earth (Evil Rick's Target Dimension)",
            "url": "https://rickandmortyapi.com/api/location/34"
        },
        "name": "Jerry Smith",
        "origin": {
            "name": "Earth (Evil Rick's Target Dimension)",
            "url": "https://rickandmortyapi.com/api/location/34"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/177"
    },
    {
        "created": "2017-12-29T18:29:31.279Z",
        "episode": [
            18
        ],
        "gender": "Male",
        "id": 178,
        "image": "https://rickandmortyapi.com/api/character/avatar/178.jpeg",
        "location": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "name": "Jerry's Mytholog",
        "origin": {
            "name": "Nuptia 4",
            "url": "https://rickandmortyapi.com/api/location/13"
        },
        "species": "Mythological Creature",
        "status": "Dead",
        "type": "Mytholog",
        "url": "https://rickandmortyapi.com/api/character/178"
    },
    {
        "created": "2017-12-29T18:34:37.806Z",
        "episode": [
            1,
            4,
            6
        ],
        "gender": "Female",
        "id": 179,
        "image": "https://rickandmortyapi.com/api/character/avatar/179.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Jessica",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Cronenberg",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/179"
    },
    {
        "created": "2017-12-29T18:36:27.225Z",
        "episode": [
            11,
            13,
            17,
            18,
            26,
            27,
            28,
            29,
            30,
            32,
            39
        ],
        "gender": "Female",
        "id": 180,
        "image": "https://rickandmortyapi.com/api/character/avatar/180.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Jessica",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/180"
    },
    {
        "created": "2017-12-29T18:47:23.345Z",
        "episode": [
            1,
            4,
            6,
            11,
            17,
            18,
            25,
            27
        ],
        "gender": "Female",
        "id": 181,
        "image": "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Jessica's Friend",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/181"
    },
    {
        "created": "2017-12-29T18:49:48.953Z",
        "episode": [
            16
        ],
        "gender": "Male",
        "id": 182,
        "image": "https://rickandmortyapi.com/api/character/avatar/182.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Jim",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/182"
    },
    {
        "created": "2017-12-29T18:51:29.693Z",
        "episode": [
            8
        ],
        "gender": "Male",
        "id": 183,
        "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
        "location": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "name": "Johnny Depp",
        "origin": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/183"
    },
    {
        "created": "2017-12-29T18:54:04.572Z",
        "episode": [
            8
        ],
        "gender": "Male",
        "id": 184,
        "image": "https://rickandmortyapi.com/api/character/avatar/184.jpeg",
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "name": "Jon",
        "origin": {
            "name": "Gazorpazorp",
            "url": "https://rickandmortyapi.com/api/location/40"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Gazorpian",
        "url": "https://rickandmortyapi.com/api/character/184"
    },
    {
        "created": "2017-12-29T18:56:15.622Z",
        "episode": [
            30
        ],
        "gender": "Male",
        "id": 185,
        "image": "https://rickandmortyapi.com/api/character/avatar/185.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Joseph Eli Lipkip",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/185"
    },
    {
        "created": "2017-12-29T18:58:34.530Z",
        "episode": [
            3
        ],
        "gender": "Female",
        "id": 186,
        "image": "https://rickandmortyapi.com/api/character/avatar/186.jpeg",
        "location": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "name": "Joyce Smith",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/186"
    },
    {
        "created": "2017-12-29T18:59:47.440Z",
        "episode": [
            28
        ],
        "gender": "Male",
        "id": 187,
        "image": "https://rickandmortyapi.com/api/character/avatar/187.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Juggling Rick",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/187"
    },
    {
        "created": "2017-12-29T19:10:16.171Z",
        "episode": [
            14
        ],
        "gender": "Female",
        "id": 188,
        "image": "https://rickandmortyapi.com/api/character/avatar/188.jpeg",
        "location": {
            "name": "Unity's Planet",
            "url": "https://rickandmortyapi.com/api/location/28"
        },
        "name": "Karen Entity",
        "origin": {
            "name": "Unity's Planet",
            "url": "https://rickandmortyapi.com/api/location/28"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Unknown-nippled alien",
        "url": "https://rickandmortyapi.com/api/character/188"
    },
    {
        "created": "2017-12-29T19:13:57.070Z",
        "episode": [
            24
        ],
        "gender": "Female",
        "id": 189,
        "image": "https://rickandmortyapi.com/api/character/avatar/189.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Katarina",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "species": "Human",
        "status": "Dead",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/189"
    },
    {
        "created": "2017-12-29T19:26:06.900Z",
        "episode": [
            30
        ],
        "gender": "Female",
        "id": 190,
        "image": "https://rickandmortyapi.com/api/character/avatar/190.jpeg",
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "name": "Keara",
        "origin": {
            "name": "Krootabulon",
            "url": "https://rickandmortyapi.com/api/location/45"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Krootabulan",
        "url": "https://rickandmortyapi.com/api/character/190"
    },
    {
        "created": "2017-12-29T19:40:07.816Z",
        "episode": [
            4
        ],
        "gender": "Male",
        "id": 191,
        "image": "https://rickandmortyapi.com/api/character/avatar/191.jpeg",
        "location": {
            "name": "Zigerion's Base",
            "url": "https://rickandmortyapi.com/api/location/46"
        },
        "name": "Kevin",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Zigerion",
        "url": "https://rickandmortyapi.com/api/character/191"
    },
    {
        "created": "2017-12-29T19:49:29.297Z",
        "episode": [
            9
        ],
        "gender": "Male",
        "id": 192,
        "image": "https://rickandmortyapi.com/api/character/avatar/192.jpeg",
        "location": {
            "name": "Pluto",
            "url": "https://rickandmortyapi.com/api/location/47"
        },
        "name": "King Flippy Nips",
        "origin": {
            "name": "Pluto",
            "url": "https://rickandmortyapi.com/api/location/47"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Plutonian",
        "url": "https://rickandmortyapi.com/api/character/192"
    },
    {
        "created": "2017-12-29T19:58:44.743Z",
        "episode": [
            5
        ],
        "gender": "Male",
        "id": 193,
        "image": "https://rickandmortyapi.com/api/character/avatar/193.jpeg",
        "location": {
            "name": "Fantasy World",
            "url": "https://rickandmortyapi.com/api/location/48"
        },
        "name": "King Jellybean",
        "origin": {
            "name": "Fantasy World",
            "url": "https://rickandmortyapi.com/api/location/48"
        },
        "species": "Mythological Creature",
        "status": "Dead",
        "type": "Jellybean",
        "url": "https://rickandmortyapi.com/api/character/193"
    },
    {
        "created": "2017-12-30T12:13:53.878Z",
        "episode": [
            21
        ],
        "gender": "unknown",
        "id": 194,
        "image": "https://rickandmortyapi.com/api/character/avatar/194.jpeg",
        "location": {
            "name": "Planet Squanch",
            "url": "https://rickandmortyapi.com/api/location/35"
        },
        "name": "Kozbian",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Tentacle alien",
        "url": "https://rickandmortyapi.com/api/character/194"
    },
    {
        "created": "2017-12-30T12:19:16.042Z",
        "episode": [
            8
        ],
        "gender": "Female",
        "id": 195,
        "image": "https://rickandmortyapi.com/api/character/avatar/195.jpeg",
        "location": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "name": "Kristen Stewart",
        "origin": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "species": "Human",
        "status": "Alive",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/195"
    },
    {
        "created": "2017-12-30T12:28:52.954Z",
        "episode": [
            13
        ],
        "gender": "Male",
        "id": 196,
        "image": "https://rickandmortyapi.com/api/character/avatar/196.jpeg",
        "location": {
            "name": "unknown",
            "url": ""
        },
        "name": "Krombopulos Michael",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Alien",
        "status": "Dead",
        "type": "Gromflomite",
        "url": "https://rickandmortyapi.com/api/character/196"
    },
    {
        "created": "2017-12-30T12:39:09.025Z",
        "episode": [
            17
        ],
        "gender": "Male",
        "id": 197,
        "image": "https://rickandmortyapi.com/api/character/avatar/197.jpeg",
        "location": {
            "name": "Kyle's Teenyverse",
            "url": "https://rickandmortyapi.com/api/location/50"
        },
        "name": "Kyle",
        "origin": {
            "name": "Zeep Xanflorp's Miniverse",
            "url": "https://rickandmortyapi.com/api/location/49"
        },
        "species": "Humanoid",
        "status": "Dead",
        "type": "Miniverse inhabitant",
        "url": "https://rickandmortyapi.com/api/character/197"
    },
    {
        "created": "2017-12-30T12:43:37.571Z",
        "episode": [
            25
        ],
        "gender": "Female",
        "id": 198,
        "image": "https://rickandmortyapi.com/api/character/avatar/198.jpeg",
        "location": {
            "name": "Dorian 5",
            "url": "https://rickandmortyapi.com/api/location/29"
        },
        "name": "Lady Katana",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Humanoid",
        "status": "Dead",
        "type": "Cyborg",
        "url": "https://rickandmortyapi.com/api/character/198"
    },
    {
        "created": "2017-12-30T12:48:44.677Z",
        "episode": [
            16,
            19,
            21
        ],
        "gender": "unknown",
        "id": 199,
        "image": "https://rickandmortyapi.com/api/character/avatar/199.jpeg",
        "location": {
            "name": "Planet Squanch",
            "url": "https://rickandmortyapi.com/api/location/35"
        },
        "name": "Larva Alien",
        "origin": {
            "name": "Larva Alien's Planet",
            "url": "https://rickandmortyapi.com/api/location/51"
        },
        "species": "Alien",
        "status": "Alive",
        "type": "Larva alien",
        "url": "https://rickandmortyapi.com/api/character/199"
    },
    {
        "created": "2017-12-30T12:49:52.971Z",
        "episode": [
            22
        ],
        "gender": "Male",
        "id": 200,
        "image": "https://rickandmortyapi.com/api/character/avatar/200.jpeg",
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "name": "Lawyer Morty",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "species": "Human",
        "status": "unknown",
        "type": "",
        "url": "https://rickandmortyapi.com/api/character/200"
    }
]

let episodes = [
    {
        "air_date": "December 2, 2013",
        "characters": [
            1,
            2,
            35,
            38,
            62,
            92,
            127,
            144,
            158,
            175,
            179,
            181
        ],
        "created": "2017-11-10T12:56:33.798Z",
        "episode": "S01E01",
        "id": 1,
        "name": "Pilot",
        "url": "https://rickandmortyapi.com/api/episode/1"
    },
    {
        "air_date": "December 9, 2013",
        "characters": [
            1,
            2,
            38,
            46,
            63,
            80,
            175
        ],
        "created": "2017-11-10T12:56:33.916Z",
        "episode": "S01E02",
        "id": 2,
        "name": "Lawnmower Dog",
        "url": "https://rickandmortyapi.com/api/episode/2"
    },
    {
        "air_date": "December 16, 2013",
        "characters": [
            1,
            2,
            12,
            17,
            38,
            45,
            96,
            97,
            98,
            99,
            100,
            101,
            108,
            112,
            114,
            169,
            175,
            186
        ],
        "created": "2017-11-10T12:56:34.022Z",
        "episode": "S01E03",
        "id": 3,
        "name": "Anatomy Park",
        "url": "https://rickandmortyapi.com/api/episode/3"
    },
    {
        "air_date": "January 13, 2014",
        "characters": [
            1,
            2,
            38,
            87,
            175,
            179,
            181,
            191
        ],
        "created": "2017-11-10T12:56:34.129Z",
        "episode": "S01E04",
        "id": 4,
        "name": "M. Night Shaym-Aliens!",
        "url": "https://rickandmortyapi.com/api/episode/4"
    },
    {
        "air_date": "January 20, 2014",
        "characters": [
            1,
            2,
            38,
            41,
            89,
            116,
            117,
            120,
            175,
            193
        ],
        "created": "2017-11-10T12:56:34.236Z",
        "episode": "S01E05",
        "id": 5,
        "name": "Meeseeks and Destroy",
        "url": "https://rickandmortyapi.com/api/episode/5"
    },
    {
        "air_date": "January 27, 2014",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            38,
            58,
            82,
            83,
            92,
            155,
            175,
            179,
            181
        ],
        "created": "2017-11-10T12:56:34.339Z",
        "episode": "S01E06",
        "id": 6,
        "name": "Rick Potion #9",
        "url": "https://rickandmortyapi.com/api/episode/6"
    },
    {
        "air_date": "March 10, 2014",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            59,
            151,
            168
        ],
        "created": "2017-11-10T12:56:34.441Z",
        "episode": "S01E07",
        "id": 7,
        "name": "Raising Gazorpazorp",
        "url": "https://rickandmortyapi.com/api/episode/7"
    },
    {
        "air_date": "March 17, 2014",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            20,
            28,
            29,
            34,
            37,
            54,
            88,
            91,
            129,
            134,
            136,
            145,
            153,
            157,
            176,
            183,
            184,
            195
        ],
        "created": "2017-11-10T12:56:34.543Z",
        "episode": "S01E08",
        "id": 8,
        "name": "Rixty Minutes",
        "url": "https://rickandmortyapi.com/api/episode/8"
    },
    {
        "air_date": "March 24, 2014",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            88,
            192
        ],
        "created": "2017-11-10T12:56:34.645Z",
        "episode": "S01E09",
        "id": 9,
        "name": "Something Ricked This Way Comes",
        "url": "https://rickandmortyapi.com/api/episode/9"
    },
    {
        "air_date": "April 7, 2014",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            7,
            14,
            15,
            18,
            19,
            21,
            22,
            27,
            39,
            53,
            77,
            78,
            79,
            82,
            83,
            84,
            85,
            86,
            103,
            113,
            118,
            119,
            152,
            164,
            177
        ],
        "created": "2017-11-10T12:56:34.747Z",
        "episode": "S01E10",
        "id": 10,
        "name": "Close Rick-counters of the Rick Kind",
        "url": "https://rickandmortyapi.com/api/episode/10"
    },
    {
        "air_date": "April 14, 2014",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            7,
            35,
            47,
            58,
            88,
            180,
            181
        ],
        "created": "2017-11-10T12:56:34.850Z",
        "episode": "S01E11",
        "id": 11,
        "name": "Ricksy Business",
        "url": "https://rickandmortyapi.com/api/episode/11"
    },
    {
        "air_date": "July 26, 2015",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            11,
            64
        ],
        "created": "2017-11-10T12:56:34.953Z",
        "episode": "S02E01",
        "id": 12,
        "name": "A Rickle in Time",
        "url": "https://rickandmortyapi.com/api/episode/12"
    },
    {
        "air_date": "August 2, 2015",
        "characters": [
            1,
            2,
            5,
            23,
            28,
            34,
            106,
            122,
            129,
            131,
            133,
            136,
            174,
            180,
            196
        ],
        "created": "2017-11-10T12:56:35.055Z",
        "episode": "S02E02",
        "id": 13,
        "name": "Mortynight Run",
        "url": "https://rickandmortyapi.com/api/episode/13"
    },
    {
        "air_date": "August 9, 2015",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            36,
            50,
            90,
            188
        ],
        "created": "2017-11-10T12:56:35.158Z",
        "episode": "S02E03",
        "id": 14,
        "name": "Auto Erotic Assimilation",
        "url": "https://rickandmortyapi.com/api/episode/14"
    },
    {
        "air_date": "August 16, 2015",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            16,
            31,
            32,
            76,
            109,
            128,
            141,
            154,
            169
        ],
        "created": "2017-11-10T12:56:35.261Z",
        "episode": "S02E04",
        "id": 15,
        "name": "Total Rickall",
        "url": "https://rickandmortyapi.com/api/episode/15"
    },
    {
        "air_date": "August 23, 2015",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            24,
            47,
            115,
            124,
            138,
            161,
            162,
            172,
            182,
            199
        ],
        "created": "2017-11-10T12:56:35.364Z",
        "episode": "S02E05",
        "id": 16,
        "name": "Get Schwifty",
        "url": "https://rickandmortyapi.com/api/episode/16"
    },
    {
        "air_date": "August 30, 2015",
        "characters": [
            1,
            2,
            3,
            28,
            34,
            65,
            129,
            159,
            160,
            180,
            181,
            197
        ],
        "created": "2017-11-10T12:56:35.467Z",
        "episode": "S02E06",
        "id": 17,
        "name": "The Ricks Must Be Crazy",
        "url": "https://rickandmortyapi.com/api/episode/17"
    },
    {
        "air_date": "September 13, 2015",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            40,
            55,
            66,
            131,
            132,
            146,
            148,
            163,
            178,
            180,
            181
        ],
        "created": "2017-11-10T12:56:35.569Z",
        "episode": "S02E07",
        "id": 18,
        "name": "Big Trouble in Little Sanchez",
        "url": "https://rickandmortyapi.com/api/episode/18"
    },
    {
        "air_date": "September 20, 2015",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            23,
            35,
            49,
            51,
            105,
            121,
            126,
            133,
            153,
            173,
            199
        ],
        "created": "2017-11-10T12:56:35.669Z",
        "episode": "S02E08",
        "id": 19,
        "name": "Interdimensional Cable 2: Tempting Fate",
        "url": "https://rickandmortyapi.com/api/episode/19"
    },
    {
        "air_date": "September 27, 2015",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            26,
            139
        ],
        "created": "2017-11-10T12:56:35.772Z",
        "episode": "S02E09",
        "id": 20,
        "name": "Look Who's Purging Now",
        "url": "https://rickandmortyapi.com/api/episode/20"
    },
    {
        "air_date": "October 4, 2015",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            23,
            47,
            55,
            75,
            102,
            130,
            131,
            133,
            194,
            199
        ],
        "created": "2017-11-10T12:56:35.875Z",
        "episode": "S02E10",
        "id": 21,
        "name": "The Wedding Squanchers",
        "url": "https://rickandmortyapi.com/api/episode/21"
    },
    {
        "air_date": "April 1, 2017",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            21,
            22,
            38,
            42,
            47,
            48,
            57,
            69,
            71,
            86,
            94,
            95,
            103,
            150,
            152,
            175
        ],
        "created": "2017-11-10T12:56:35.983Z",
        "episode": "S03E01",
        "id": 22,
        "name": "The Rickshank Rickdemption",
        "url": "https://rickandmortyapi.com/api/episode/22"
    },
    {
        "air_date": "July 30, 2017",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            25,
            52,
            68,
            110,
            111,
            140,
            156
        ],
        "created": "2017-11-10T12:56:36.100Z",
        "episode": "S03E02",
        "id": 23,
        "name": "Rickmancing the Stone",
        "url": "https://rickandmortyapi.com/api/episode/23"
    },
    {
        "air_date": "August 6, 2017",
        "characters": [
            1,
            2,
            3,
            4,
            9,
            70,
            107,
            167,
            171,
            189
        ],
        "created": "2017-11-10T12:56:36.206Z",
        "episode": "S03E03",
        "id": 24,
        "name": "Pickle Rick",
        "url": "https://rickandmortyapi.com/api/episode/24"
    },
    {
        "air_date": "August 13, 2017",
        "characters": [
            1,
            2,
            3,
            4,
            10,
            23,
            35,
            60,
            81,
            88,
            93,
            104,
            125,
            181,
            198
        ],
        "created": "2017-11-10T12:56:36.310Z",
        "episode": "S03E04",
        "id": 25,
        "name": "Vindicators 3: The Return of Worldender",
        "url": "https://rickandmortyapi.com/api/episode/25"
    },
    {
        "air_date": "August 20, 2017",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            23,
            47,
            115,
            137,
            142,
            180
        ],
        "created": "2017-11-10T12:56:36.413Z",
        "episode": "S03E05",
        "id": 26,
        "name": "The Whirly Dirly Conspiracy",
        "url": "https://rickandmortyapi.com/api/episode/26"
    },
    {
        "air_date": "August 27, 2017",
        "characters": [
            1,
            2,
            3,
            4,
            6,
            124,
            170,
            180,
            181
        ],
        "created": "2017-11-10T12:56:36.515Z",
        "episode": "S03E06",
        "id": 27,
        "name": "Rest and Ricklaxation",
        "url": "https://rickandmortyapi.com/api/episode/27"
    },
    {
        "air_date": "September 10, 2017",
        "characters": [
            1,
            2,
            4,
            8,
            18,
            22,
            27,
            43,
            44,
            48,
            56,
            61,
            72,
            73,
            74,
            78,
            85,
            86,
            118,
            123,
            135,
            143,
            165,
            180,
            187
        ],
        "created": "2017-11-10T12:56:36.618Z",
        "episode": "S03E07",
        "id": 28,
        "name": "The Ricklantis Mixup",
        "url": "https://rickandmortyapi.com/api/episode/28"
    },
    {
        "air_date": "September 17, 2017",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            33,
            67,
            147,
            149,
            180
        ],
        "created": "2017-11-10T12:56:36.726Z",
        "episode": "S03E08",
        "id": 29,
        "name": "Morty's Mind Blowers",
        "url": "https://rickandmortyapi.com/api/episode/29"
    },
    {
        "air_date": "September 24, 2017",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            58,
            180,
            185,
            190
        ],
        "created": "2017-11-10T12:56:36.828Z",
        "episode": "S03E09",
        "id": 30,
        "name": "The ABC's of Beth",
        "url": "https://rickandmortyapi.com/api/episode/30"
    },
    {
        "air_date": "October 1, 2017",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            13,
            30,
            166
        ],
        "created": "2017-11-10T12:56:36.929Z",
        "episode": "S03E10",
        "id": 31,
        "name": "The Rickchurian Mortydate",
        "url": "https://rickandmortyapi.com/api/episode/31"
    },
    {
        "air_date": "November 10, 2019",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            180
        ],
        "created": "2020-04-30T06:52:04.495Z",
        "episode": "S04E01",
        "id": 32,
        "name": "Edge of Tomorty: Rick, Die, Rickpeat",
        "url": "https://rickandmortyapi.com/api/episode/32"
    },
    {
        "air_date": "November 17, 2019",
        "characters": [
            1,
            2,
            3,
            4,
            5
        ],
        "created": "2020-04-30T06:52:04.498Z",
        "episode": "S04E02",
        "id": 33,
        "name": "The Old Man and the Seat",
        "url": "https://rickandmortyapi.com/api/episode/33"
    },
    {
        "air_date": "November 24, 2019",
        "characters": [
            1,
            2,
            3,
            4
        ],
        "created": "2020-04-30T06:52:04.498Z",
        "episode": "S04E03",
        "id": 34,
        "name": "One Crew Over the Crewcoo's Morty",
        "url": "https://rickandmortyapi.com/api/episode/34"
    },
    {
        "air_date": "December 8, 2019",
        "characters": [
            1,
            2,
            3,
            4,
            5
        ],
        "created": "2020-04-30T06:52:04.498Z",
        "episode": "S04E04",
        "id": 35,
        "name": "Claw and Hoarder: Special Ricktim's Morty",
        "url": "https://rickandmortyapi.com/api/episode/35"
    },
    {
        "air_date": "December 15, 2019",
        "characters": [
            1,
            2,
            3,
            4,
            5
        ],
        "created": "2020-04-30T06:52:04.499Z",
        "episode": "S04E05",
        "id": 36,
        "name": "Rattlestar Ricklactica",
        "url": "https://rickandmortyapi.com/api/episode/36"
    },
    {
        "air_date": "May 3, 2020",
        "characters": [
            1,
            2
        ],
        "created": "2020-08-06T05:44:21.422Z",
        "episode": "S04E06",
        "id": 37,
        "name": "Never Ricking Morty",
        "url": "https://rickandmortyapi.com/api/episode/37"
    },
    {
        "air_date": "May 10, 2020",
        "characters": [
            1,
            2,
            3,
            4,
            5
        ],
        "created": "2020-08-06T05:49:40.563Z",
        "episode": "S04E07",
        "id": 38,
        "name": "Promortyus",
        "url": "https://rickandmortyapi.com/api/episode/38"
    },
    {
        "air_date": "May 17, 2020",
        "characters": [
            1,
            2,
            4,
            3,
            5,
            180
        ],
        "created": "2020-08-06T05:51:07.419Z",
        "episode": "S04E08",
        "id": 39,
        "name": "The Vat of Acid Episode",
        "url": "https://rickandmortyapi.com/api/episode/39"
    },
    {
        "air_date": "May 24, 2020",
        "characters": [
            1,
            2,
            3,
            4,
            5
        ],
        "created": "2020-08-06T05:51:25.458Z",
        "episode": "S04E09",
        "id": 40,
        "name": "Childrick of Mort",
        "url": "https://rickandmortyapi.com/api/episode/40"
    },
    {
        "air_date": "May 31, 2020",
        "characters": [
            1,
            2,
            3,
            4,
            5,
            107
        ],
        "created": "2020-08-06T05:51:52.079Z",
        "episode": "S04E10",
        "id": 41,
        "name": "Star Mort: Rickturn of the Jerri",
        "url": "https://rickandmortyapi.com/api/episode/41"
    }
]