"use strict";

let state = [];

const data = [
    {
        id: "Dwu85P9SOIk",
        created_at: "2016-05-03T11:00:28-04:00",
        updated_at: "2016-07-10T11:00:01-05:00",
        width: 2448,
        height: 3264,
        color: "#6E633A",
        blur_hash: "LFC$yHwc8^$yIAS$%M%00KxukYIp",
        downloads: 1345,
        likes: 24,
        liked_by_user: false,
        description: "A man drinking a coffee.",
        exif: {
            make: "Canon",
            model: "Canon EOS 40D",
            exposure_time: "0.011111111111111112",
            aperture: "4.970854",
            focal_length: "37",
            iso: 100,
        },
        location: {
            name: "Montreal, Canada",
            city: "Montreal",
            country: "Canada",
            position: {
                latitude: 45.473298,
                longitude: -73.638488,
            },
        },
        current_user_collections: [
            // The *current user's* collections that this photo belongs to.
            {
                id: 206,
                title: "Makers: Cat and Ben",
                published_at: "2016-01-12T18:16:09-05:00",
                last_collected_at: "2016-06-02T13:10:03-04:00",
                updated_at: "2016-07-10T11:00:01-05:00",
                cover_photo: null,
                user: null,
            },
            // ... more collections
        ],
        urls: {
            raw: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
            full: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
            regular:
                "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
            small: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
            thumb: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        },
        links: {
            self: "https://api.unsplash.com/photos/Dwu85P9SOIk",
            html: "https://unsplash.com/photos/Dwu85P9SOIk",
            download: "https://unsplash.com/photos/Dwu85P9SOIk/download",
            download_location:
                "https://api.unsplash.com/photos/Dwu85P9SOIk/download",
        },
        user: {
            id: "QPxL2MGqfrw",
            updated_at: "2016-07-10T11:00:01-05:00",
            username: "exampleuser",
            name: "Joe Example 01",
            portfolio_url: "https://example.com/",
            bio: "Just an everyday Joe",
            location: "Montreal",
            total_likes: 5,
            total_photos: 10,
            total_collections: 13,
            instagram_username: "instantgrammer",
            twitter_username: "crew",
            links: {
                self: "https://api.unsplash.com/users/exampleuser",
                html: "https://unsplash.com/exampleuser",
                photos: "https://api.unsplash.com/users/exampleuser/photos",
                likes: "https://api.unsplash.com/users/exampleuser/likes",
                portfolio:
                    "https://api.unsplash.com/users/exampleuser/portfolio",
            },
        },
    },
    {
        id: "Dwu85P9SOIk",
        created_at: "2016-05-03T11:00:28-04:00",
        updated_at: "2016-07-10T11:00:01-05:00",
        width: 2448,
        height: 3264,
        color: "#6E633A",
        blur_hash: "LFC$yHwc8^$yIAS$%M%00KxukYIp",
        downloads: 1345,
        likes: 24,
        liked_by_user: false,
        description: "A man drinking a coffee.",
        exif: {
            make: "Canon",
            model: "Canon EOS 40D",
            exposure_time: "0.011111111111111112",
            aperture: "4.970854",
            focal_length: "37",
            iso: 100,
        },
        location: {
            name: "Montreal, Canada",
            city: "Montreal",
            country: "Canada",
            position: {
                latitude: 45.473298,
                longitude: -73.638488,
            },
        },
        current_user_collections: [
            // The *current user's* collections that this photo belongs to.
            {
                id: 206,
                title: "Makers: Cat and Ben",
                published_at: "2016-01-12T18:16:09-05:00",
                last_collected_at: "2016-06-02T13:10:03-04:00",
                updated_at: "2016-07-10T11:00:01-05:00",
                cover_photo: null,
                user: null,
            },
            // ... more collections
        ],
        urls: {
            raw: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
            full: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
            regular:
                "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
            small: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
            thumb: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        },
        links: {
            self: "https://api.unsplash.com/photos/Dwu85P9SOIk",
            html: "https://unsplash.com/photos/Dwu85P9SOIk",
            download: "https://unsplash.com/photos/Dwu85P9SOIk/download",
            download_location:
                "https://api.unsplash.com/photos/Dwu85P9SOIk/download",
        },
        user: {
            id: "QPxL2MGqfrw",
            updated_at: "2016-07-10T11:00:01-05:00",
            username: "exampleuser",
            name: "Joe Example 02",
            portfolio_url: "https://example.com/",
            bio: "Just an everyday Joe",
            location: "Montreal",
            total_likes: 5,
            total_photos: 10,
            total_collections: 13,
            instagram_username: "instantgrammer",
            twitter_username: "crew",
            links: {
                self: "https://api.unsplash.com/users/exampleuser",
                html: "https://unsplash.com/exampleuser",
                photos: "https://api.unsplash.com/users/exampleuser/photos",
                likes: "https://api.unsplash.com/users/exampleuser/likes",
                portfolio:
                    "https://api.unsplash.com/users/exampleuser/portfolio",
            },
        },
    },
    {
        id: "Dwu85P9SOIk",
        created_at: "2016-05-03T11:00:28-04:00",
        updated_at: "2016-07-10T11:00:01-05:00",
        width: 2448,
        height: 3264,
        color: "#6E633A",
        blur_hash: "LFC$yHwc8^$yIAS$%M%00KxukYIp",
        downloads: 1345,
        likes: 24,
        liked_by_user: false,
        description: "A man drinking a coffee.",
        exif: {
            make: "Canon",
            model: "Canon EOS 40D",
            exposure_time: "0.011111111111111112",
            aperture: "4.970854",
            focal_length: "37",
            iso: 100,
        },
        location: {
            name: "Montreal, Canada",
            city: "Montreal",
            country: "Canada",
            position: {
                latitude: 45.473298,
                longitude: -73.638488,
            },
        },
        current_user_collections: [
            // The *current user's* collections that this photo belongs to.
            {
                id: 206,
                title: "Makers: Cat and Ben",
                published_at: "2016-01-12T18:16:09-05:00",
                last_collected_at: "2016-06-02T13:10:03-04:00",
                updated_at: "2016-07-10T11:00:01-05:00",
                cover_photo: null,
                user: null,
            },
            // ... more collections
        ],
        urls: {
            raw: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
            full: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
            regular:
                "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
            small: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
            thumb: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        },
        links: {
            self: "https://api.unsplash.com/photos/Dwu85P9SOIk",
            html: "https://unsplash.com/photos/Dwu85P9SOIk",
            download: "https://unsplash.com/photos/Dwu85P9SOIk/download",
            download_location:
                "https://api.unsplash.com/photos/Dwu85P9SOIk/download",
        },
        user: {
            id: "QPxL2MGqfrw",
            updated_at: "2016-07-10T11:00:01-05:00",
            username: "exampleuser",
            name: "Joe Example 03",
            portfolio_url: "https://example.com/",
            bio: "Just an everyday Joe",
            location: "Montreal",
            total_likes: 5,
            total_photos: 10,
            total_collections: 13,
            instagram_username: "instantgrammer",
            twitter_username: "crew",
            links: {
                self: "https://api.unsplash.com/users/exampleuser",
                html: "https://unsplash.com/exampleuser",
                photos: "https://api.unsplash.com/users/exampleuser/photos",
                likes: "https://api.unsplash.com/users/exampleuser/likes",
                portfolio:
                    "https://api.unsplash.com/users/exampleuser/portfolio",
            },
        },
    },
    {
        id: "Dwu85P9SOIk",
        created_at: "2016-05-03T11:00:28-04:00",
        updated_at: "2016-07-10T11:00:01-05:00",
        width: 2448,
        height: 3264,
        color: "#6E633A",
        blur_hash: "LFC$yHwc8^$yIAS$%M%00KxukYIp",
        downloads: 1345,
        likes: 24,
        liked_by_user: false,
        description: "A man drinking a coffee.",
        exif: {
            make: "Canon",
            model: "Canon EOS 40D",
            exposure_time: "0.011111111111111112",
            aperture: "4.970854",
            focal_length: "37",
            iso: 100,
        },
        location: {
            name: "Montreal, Canada",
            city: "Montreal",
            country: "Canada",
            position: {
                latitude: 45.473298,
                longitude: -73.638488,
            },
        },
        current_user_collections: [
            // The *current user's* collections that this photo belongs to.
            {
                id: 206,
                title: "Makers: Cat and Ben",
                published_at: "2016-01-12T18:16:09-05:00",
                last_collected_at: "2016-06-02T13:10:03-04:00",
                updated_at: "2016-07-10T11:00:01-05:00",
                cover_photo: null,
                user: null,
            },
            // ... more collections
        ],
        urls: {
            raw: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
            full: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
            regular:
                "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
            small: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
            thumb: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        },
        links: {
            self: "https://api.unsplash.com/photos/Dwu85P9SOIk",
            html: "https://unsplash.com/photos/Dwu85P9SOIk",
            download: "https://unsplash.com/photos/Dwu85P9SOIk/download",
            download_location:
                "https://api.unsplash.com/photos/Dwu85P9SOIk/download",
        },
        user: {
            id: "QPxL2MGqfrw",
            updated_at: "2016-07-10T11:00:01-05:00",
            username: "exampleuser",
            name: "Joe Example 04",
            portfolio_url: "https://example.com/",
            bio: "Just an everyday Joe",
            location: "Montreal",
            total_likes: 5,
            total_photos: 10,
            total_collections: 13,
            instagram_username: "instantgrammer",
            twitter_username: "crew",
            links: {
                self: "https://api.unsplash.com/users/exampleuser",
                html: "https://unsplash.com/exampleuser",
                photos: "https://api.unsplash.com/users/exampleuser/photos",
                likes: "https://api.unsplash.com/users/exampleuser/likes",
                portfolio:
                    "https://api.unsplash.com/users/exampleuser/portfolio",
            },
        },
    },
    {
        id: "Dwu85P9SOIk",
        created_at: "2016-05-03T11:00:28-04:00",
        updated_at: "2016-07-10T11:00:01-05:00",
        width: 2448,
        height: 3264,
        color: "#6E633A",
        blur_hash: "LFC$yHwc8^$yIAS$%M%00KxukYIp",
        downloads: 1345,
        likes: 24,
        liked_by_user: false,
        description: "A man drinking a coffee.",
        exif: {
            make: "Canon",
            model: "Canon EOS 40D",
            exposure_time: "0.011111111111111112",
            aperture: "4.970854",
            focal_length: "37",
            iso: 100,
        },
        location: {
            name: "Montreal, Canada",
            city: "Montreal",
            country: "Canada",
            position: {
                latitude: 45.473298,
                longitude: -73.638488,
            },
        },
        current_user_collections: [
            // The *current user's* collections that this photo belongs to.
            {
                id: 206,
                title: "Makers: Cat and Ben",
                published_at: "2016-01-12T18:16:09-05:00",
                last_collected_at: "2016-06-02T13:10:03-04:00",
                updated_at: "2016-07-10T11:00:01-05:00",
                cover_photo: null,
                user: null,
            },
            // ... more collections
        ],
        urls: {
            raw: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
            full: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
            regular:
                "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
            small: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
            thumb: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        },
        links: {
            self: "https://api.unsplash.com/photos/Dwu85P9SOIk",
            html: "https://unsplash.com/photos/Dwu85P9SOIk",
            download: "https://unsplash.com/photos/Dwu85P9SOIk/download",
            download_location:
                "https://api.unsplash.com/photos/Dwu85P9SOIk/download",
        },
        user: {
            id: "QPxL2MGqfrw",
            updated_at: "2016-07-10T11:00:01-05:00",
            username: "exampleuser",
            name: "Joe Example 05",
            portfolio_url: "https://example.com/",
            bio: "Just an everyday Joe",
            location: "Montreal",
            total_likes: 5,
            total_photos: 10,
            total_collections: 13,
            instagram_username: "instantgrammer",
            twitter_username: "crew",
            links: {
                self: "https://api.unsplash.com/users/exampleuser",
                html: "https://unsplash.com/exampleuser",
                photos: "https://api.unsplash.com/users/exampleuser/photos",
                likes: "https://api.unsplash.com/users/exampleuser/likes",
                portfolio:
                    "https://api.unsplash.com/users/exampleuser/portfolio",
            },
        },
    },
    {
        id: "Dwu85P9SOIk",
        created_at: "2016-05-03T11:00:28-04:00",
        updated_at: "2016-07-10T11:00:01-05:00",
        width: 2448,
        height: 3264,
        color: "#6E633A",
        blur_hash: "LFC$yHwc8^$yIAS$%M%00KxukYIp",
        downloads: 1345,
        likes: 24,
        liked_by_user: false,
        description: "A man drinking a coffee.",
        exif: {
            make: "Canon",
            model: "Canon EOS 40D",
            exposure_time: "0.011111111111111112",
            aperture: "4.970854",
            focal_length: "37",
            iso: 100,
        },
        location: {
            name: "Montreal, Canada",
            city: "Montreal",
            country: "Canada",
            position: {
                latitude: 45.473298,
                longitude: -73.638488,
            },
        },
        current_user_collections: [
            // The *current user's* collections that this photo belongs to.
            {
                id: 206,
                title: "Makers: Cat and Ben",
                published_at: "2016-01-12T18:16:09-05:00",
                last_collected_at: "2016-06-02T13:10:03-04:00",
                updated_at: "2016-07-10T11:00:01-05:00",
                cover_photo: null,
                user: null,
            },
            // ... more collections
        ],
        urls: {
            raw: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
            full: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
            regular:
                "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
            small: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
            thumb: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        },
        links: {
            self: "https://api.unsplash.com/photos/Dwu85P9SOIk",
            html: "https://unsplash.com/photos/Dwu85P9SOIk",
            download: "https://unsplash.com/photos/Dwu85P9SOIk/download",
            download_location:
                "https://api.unsplash.com/photos/Dwu85P9SOIk/download",
        },
        user: {
            id: "QPxL2MGqfrw",
            updated_at: "2016-07-10T11:00:01-05:00",
            username: "exampleuser",
            name: "Joe Example 06",
            portfolio_url: "https://example.com/",
            bio: "Just an everyday Joe",
            location: "Montreal",
            total_likes: 5,
            total_photos: 10,
            total_collections: 13,
            instagram_username: "instantgrammer",
            twitter_username: "crew",
            links: {
                self: "https://api.unsplash.com/users/exampleuser",
                html: "https://unsplash.com/exampleuser",
                photos: "https://api.unsplash.com/users/exampleuser/photos",
                likes: "https://api.unsplash.com/users/exampleuser/likes",
                portfolio:
                    "https://api.unsplash.com/users/exampleuser/portfolio",
            },
        },
    },
    {
        id: "Dwu85P9SOIk",
        created_at: "2016-05-03T11:00:28-04:00",
        updated_at: "2016-07-10T11:00:01-05:00",
        width: 2448,
        height: 3264,
        color: "#6E633A",
        blur_hash: "LFC$yHwc8^$yIAS$%M%00KxukYIp",
        downloads: 1345,
        likes: 24,
        liked_by_user: false,
        description: "A man drinking a coffee.",
        exif: {
            make: "Canon",
            model: "Canon EOS 40D",
            exposure_time: "0.011111111111111112",
            aperture: "4.970854",
            focal_length: "37",
            iso: 100,
        },
        location: {
            name: "Montreal, Canada",
            city: "Montreal",
            country: "Canada",
            position: {
                latitude: 45.473298,
                longitude: -73.638488,
            },
        },
        current_user_collections: [
            // The *current user's* collections that this photo belongs to.
            {
                id: 206,
                title: "Makers: Cat and Ben",
                published_at: "2016-01-12T18:16:09-05:00",
                last_collected_at: "2016-06-02T13:10:03-04:00",
                updated_at: "2016-07-10T11:00:01-05:00",
                cover_photo: null,
                user: null,
            },
            // ... more collections
        ],
        urls: {
            raw: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
            full: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
            regular:
                "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
            small: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
            thumb: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        },
        links: {
            self: "https://api.unsplash.com/photos/Dwu85P9SOIk",
            html: "https://unsplash.com/photos/Dwu85P9SOIk",
            download: "https://unsplash.com/photos/Dwu85P9SOIk/download",
            download_location:
                "https://api.unsplash.com/photos/Dwu85P9SOIk/download",
        },
        user: {
            id: "QPxL2MGqfrw",
            updated_at: "2016-07-10T11:00:01-05:00",
            username: "exampleuser",
            name: "Joe Example 07",
            portfolio_url: "https://example.com/",
            bio: "Just an everyday Joe",
            location: "Montreal",
            total_likes: 5,
            total_photos: 10,
            total_collections: 13,
            instagram_username: "instantgrammer",
            twitter_username: "crew",
            links: {
                self: "https://api.unsplash.com/users/exampleuser",
                html: "https://unsplash.com/exampleuser",
                photos: "https://api.unsplash.com/users/exampleuser/photos",
                likes: "https://api.unsplash.com/users/exampleuser/likes",
                portfolio:
                    "https://api.unsplash.com/users/exampleuser/portfolio",
            },
        },
    },
    // ... more photos
];

// текущая дата
let currentDate = new Date();

console.log(currentDate.getDay());

// Images names array
const images = [];
// console.log(images);
// images.push(1);
// console.log(images);

const getWeekDay = (date) => {
    let days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];

    return days[date.getDay()];
};

console.log(`Сегодня ${getWeekDay(currentDate)}`);

// // Shift array to current day of the week
// function arrShift(arr, steps) {
//     for (let index = 0; index < steps; index++) {
//         arr.unshift(arr.pop());
//     }
// }

// arrShift(images, currentDate.getDay());

window.localStorage.clear();

const readData = () => {
    const dataJSON = localStorage.getItem("photoData");

    if (dataJSON === null) {
        return undefined;
    }

    // Если вдруг в хранилище оказался невалидный JSON предохраняемся от этого
    try {
        return JSON.parse(dataJSON);
    } catch (e) {
        localStorage.removeItem("photoData");
        return undefined;
    }
};

const setPhotos = () => {
    state.forEach(({ urls: { regular }, user: { name } }) => {
        const container = {};
        container.url = regular;
        container.user = name;
        container.localLike = 0;
        images.push(container);
    });
};

const fetchPhotos = () => {
    try {
        // const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4&query=food`;
        // const response = await fetch(url);
        // console.log(data);

        if (data.length) {
            state = data;

            setPhotos();
        }
    } catch (err) {
        console.log(err);
    }
};

console.log(readData());
if (readData() === undefined) {
    fetchPhotos();
}

localStorage.setItem("photoData", JSON.stringify(images));
