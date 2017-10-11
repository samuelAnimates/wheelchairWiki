const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/wheelchairwiki",
  {
    useMongoClient: true
  }
);

var seedSites = [
    {
      "name": "Ben Thanh Market (Chợ Bến Thành)",
      "description": "A large market filled with souvenirs, clothes, restaurant stalls, and groceries.",
      "notes": "The market is navigable for wheelchair users, but some aisles may be too narrow or too crowded. Additionally, some shops near the entrances are on raised platforms and thus are not accessible.",
      "entrance": 1,
      "entranceNotes": "The main entrance on Le Loi street has a large threshold, so other entrances may be easier for wheelchair users. ",
      "bathroom": 1,
      "bathroomNotes": "The wheelchair accessible bathrooms are located near door #8",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/LIggt7h4e04"}],
      "longitude": 106.69839,
      "latitude": 10.772939
    },
    {
      "name": "Saigon Central Post Office (Bưu Điện trung tâm Sài Gòn)",
      "description": "The main post office of Saigon.",
      "notes": "The post office is not accessible, but the outside architecture makes it worth passing by if you're in the area.",
      "entrance": 0,
      "entranceNotes": "The entrance is at the top of a small set of stairs",
      "bathroom": 0,
      "bathroomNotes": "",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/2UiqRslHu_c"}],
      "longitude": 106.699882,
      "latitude": 10.7798294
    },
    {
      "name": "Notre Dame Cathedral (Nhà thờ Đức Bà Sài Gòn)",
      "description": "A famous cathedral built during the French colonial era.",
      "notes": "Though the church isn't accessible, it isn't usually open to tourists anyway. Most people come to see it from the outside at street level.",
      "entrance": 0,
      "entranceNotes": "The entrance is at the top of a flight of stairs",
      "bathroom": 0,
      "bathroomNotes": "",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/2UiqRslHu_c"}],
      "longitude": 106.6989948,
      "latitude": 10.7797838
    },
    {
      "name": "Reunification Palace (Dinh Độc Lập)",
      "description": "A historical landmark, residence of the former South Vietnamese President.",
      "notes": "The reunification palace is accessible, except for the 4th floor. The bunker can be accessed through a back entrance. The main entrance is equipped with ramps, though they're very steep.",
      "entrance": 0.5,
      "entranceNotes": "The main entrance is equipped with wide ramps, but they are very steep.",
      "bathroom": 0,
      "bathroomNotes": "he Palace is not equipped with wheelchair accessible restrooms, though the 2nd and 3rd floor bathrooms are large with a locking front door, and some wheelchair users maybe able to make it work.",
      "links": [{"title": "https://youtu.be/Uxfxdk8Hzsc",
      "url": ""}],
      "longitude": 106.695457,
      "latitude": 10.777123
    },
    {
      "name": "Banana Farm Market (Chợ Vườn Chuối)",
      "description": "A small market with fresh vegetables and seafood.",
      "notes": "With its small alleys, wheelchair users may have some trouble navigating through the market.",
      "entrance": 1,
      "entranceNotes": "",
      "bathroom": 0,
      "bathroomNotes": "",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/u-NnHVTIc-k"}],
      "longitude": 106.6846205,
      "latitude": 10.7729885
    },
    {
      "name": "Bui Vien Street (Đường Bùi Viện)",
      "description": "A lively street with restaurants, bars, souvenir shops and beauty services.",
      "notes": "Wheelchair users may have trouble entering the bars. However most have outdoor street-level tables. You won't always be able to use the sidewalks due to motorbikes and bumpy surfaces, so you'll have to join the many other pedestrians sharing the road with cars and motorbikes.",
      "entrance": 1,
      "entranceNotes": "The street itself is accessible, as is outdoor seating for restaurants, bars, and food stalls.",
      "bathroom": 0,
      "bathroomNotes": "",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/a2QMc8yx74Y"}],
      "longitude": 106.692499,
      "latitude": 10.7667325
    },
    {
      "name": "Tao Dan Park (Công Viên Tao Đàn)",
      "description": "A park with gardens, play areas, sport facilities and a Buddhist temple.",
      "notes": "The park's main walkways are wheelchair accessible, though some parts of the park are not.",
      "entrance": 1,
      "entranceNotes": "",
      "bathroom": 0,
      "bathroomNotes": "The park is equipped with 2 public accessible bathrooms, however you may have to ask the nearby staff to unlock the door. One is near the gate on Truong Dinh street, and the other is across from Saigon Star Hotel on Nguyen Thi Minh Khai street",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/2rzK0SkZf3c"}],
      "longitude": 106.6922155,
      "latitude": 10.7744581
    },
    {
      "name": "Binh Quoi Tourist Village (Làng Du Lịch Bình Quới)",
      "description": "A tourist village on the Saigon River modeled after traditional views of the Mekong Delta.",
      "notes": "The main pathways of the tourist village are accessible, though there are some bumpy parts and some steps blocking off parts of the gardens. ",
      "entrance": 1,
      "entranceNotes": "",
      "bathroom": 0,
      "bathroomNotes": "",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/EdltN2wERY8"}],
      "longitude": 106.7150383,
      "latitude": 10.7980951
    },
    {
      "name": "Cu Chi Tunnels (Địa đạo Củ Chi)",
      "description": "A network of underground tunnels that was used in the past during the Vietnam War.",
      "notes": "Wheelchair users can arrange a tour with a tour guide, but the dirt paths and uneven ground aren't wheelchair friendly. There is a hotel and other buildings on-site that may be of interest, which are a little more wheelchair-friendly.",
      "entrance": 0,
      "entranceNotes": "",
      "bathroom": 1,
      "bathroomNotes": "There is a wheelchair accessible bathroom near the exit/gift shop, but you may have to ask a staff person to unlock it.",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/tBJzwJdzrnk"}],
      "longitude": 106.4596757,
      "latitude": 11.1438913
    },
    {
      "name": "Dong Khoi Street (Đường Đồng Khởi)",
      "description": "A street with a lot of shopping, restaurants, and coffee shops.",
      "notes": "Dong Khoi street is accessible with smooth pavement and a lot curb cuts. However, many of the stores on the street may not be wheelchair accessible due to steps.",
      "entrance": 1,
      "entranceNotes": "The street itself is accessible, but the entrances to many stores are not.",
      "bathroom": 0,
      "bathroomNotes": "",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/KAlMcto-nA8"}],
      "longitude": 106.7032964,
      "latitude": 10.7758351
    },
    {
      "name": "Bitexco Tower Sky Deck (Saigon Skydeck)",
      "description": "An observation deck on the 49th floor of the Bitexco Financial Tower with a souvenir shop.",
      "notes": "",
      "entrance": 1,
      "entranceNotes": "The Sky Deck entrance is on the ground floor, on the opposite side of the building from mall entrance.",
      "bathroom": 1,
      "bathroomNotes": "The Skydeck has an accessible bathroom, as does the ground floor of the tower.",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/56Bgo7XnNRc"}],
      "longitude": 106.7044406,
      "latitude": 10.7718007
    },
    {
      "name": "Bitexco Tower Sky Deck (Saigon Skydeck)",
      "description": "A skyscraper with a mall on the ground floor.",
      "notes": "",
      "entrance": 1,
      "entranceNotes": "",
      "bathroom": 1,
      "bathroomNotes": "",
      "links": [{"title": "",
      "url": ""}],
      "longitude": 106.7044406,
      "latitude": 10.7718007
    },
    {
      "name": "Museum of Vietnamese History (Bảo tàng Lịch sử Việt Nam)",
      "description": "A museum that shows Vietnam’s history from all periods.",
      "notes": "The Museum of Vietnamese History is visitable for some manual wheelchair users, but it is not accessible.  Once inside, most of the museum is accessible, except for room 6-11.",
      "entrance": 0,
      "entranceNotes": "The entrance is equipped with a rather steep ramp that has no railing.",
      "bathroom": 0,
      "bathroomNotes": "",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/2DzJYzsyEA0"}],
      "longitude": 106.7043569,
      "latitude": 10.7877997
    },
    {
      "name": "Ho Chi Minh City Zoo and Botanical Gardens (Thảo Cầm Viên Sài Gòn)",
      "description": "Vietnam’s largest zoo and botanical garden that also contains the Museum of Vietnamese History.<",
      "notes": "Saigon Zoo and Botanical Gardens is wheelchair accessible. However, there may be some small sections closed off with steps and some inaccessible buildings.",
      "entrance": 1,
      "entranceNotes": "",
      "bathroom": 1,
      "bathroomNotes": "Only one of the bathrooms is accessible: the one located right next to the zoo’s restaurant near Nguyen Thi Minh Khai Street. ",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/dGLpjpImLL4"}],
      "longitude": 106.7052343,
      "latitude": 10.7873271
    },
    {
      "name": "Ben Thanh Night Market (Chợ Đêm Bến Thành)",
      "description": "A large night market filled with souvenirs, clothes, restaurant stalls, and groceries.",
      "notes": "The night market is accessible, with all the stalls located on the street itself.",
      "entrance": 1,
      "entranceNotes": "",
      "bathroom": 0.5,
      "bathroomNotes": "Depending on how late you come, the accessible public bathroom at Ben Thanh Market may not be open.",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/MCvUj13bhSk"}],
      "longitude": 106.6979909,
      "latitude": 10.7725563
    },
    {
      "name": "St. Xavier Church (Nhà Thờ Cha Tam)",
      "description": "A large church in Ho Chi Minh City's Chinatown.",
      "notes": "The courtyard is accessible, however the entrance to the church itself is not.",
      "entrance": 0.5,
      "entranceNotes": "The courtyard is accessible, however the entrance to the church itself is not.",
      "bathroom": 0,
      "bathroomNotes": "",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/i7VNmLtu2qs"}],
      "longitude": 106.654295,
      "latitude": 10.75196
    },
    {
      "name": "Thien Hau Pagoda (Chùa Bà Thiên Hậu)",
      "description": "A Chinese pagoda with vietnamese detailings.",
      "notes": "The pagoda has several large gat thresholds that a wheelchair user could not get over alone.",
      "entrance": 0,
      "entranceNotes": "The entrance is not accessible due to a large door threshold, though some manual wheelchair users will be able to get over it with some assistance.",
      "bathroom": 0,
      "bathroomNotes": "",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/i7VNmLtu2qs"}],
      "longitude": 106.661172,
      "latitude": 10.7532625
    },
    {
      "name": "23/9 Park (Công viên 23 tháng 9)",
      "description": "A popular park in the center of Ho Chi Minh.",
      "notes": "23/9 Park does not have wheelchair accessible curb cuts near the Ben Thanh Market entrance, but park entrances near the New World Hotel do. However, there are bars to prevent motorbikes from entering, so power wheelchairs would have trouble entering the park.",
      "entrance": 1,
      "entranceNotes": "There are bars to prevent motorbikes from speeding into the park, which are a little hard to navigate in a wheelchair.",
      "bathroom": 1,
      "bathroomNotes": "here are two wheelchair accessible bathrooms. One is across from 52 Le Lai P. Ben Thanh. another one is across from Rain Coffee on pham ngu lao street.",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/MCvUj13bhSk"}],
      "longitude": 106.6934252,
      "latitude": 10.7692831
    },
    {
      "name": "Japantown",
      "description": "A series of small alleyways with coffeeshops, Japanese food, and street art.",
      "notes": "Japantown itself is accessible, but there is no wheelchair accessible restroom. Many of the restaurants and coffeeshops have street level tables outdoors if you want to grab a snack, but there doesn't seem to be a fully accessible restaurant in the area.",
      "entrance": 1,
      "entranceNotes": "",
      "bathroom": 0,
      "bathroomNotes": "",
      "links": [{"title": "Muui Video Review",
      "url": "https://youtu.be/8XNUZ-TLrBE"}],
      "longitude": 106.7050123,
      "latitude": 10.77898
    }
   ];

var seedRestaurants = [
    {
      "name": "Co Tam Kitchen",
      "description": "A popular restaurant serving food from all over Vietnam.",
      "notes": "It is in a small space that can get very crowded, so we recommend making a reservation.",
      "entrance": 1,
      "entranceNotes": "The entrance is accessible, but you may need to ask for motorbikes to be moved away from the entrance ramp. ",
      "bathroom": 0,
      "bathroomNodes": "The nearest accessible bathroom is across the street on the ground floor of the Bitexco Tower.",
      "links": [{"title": "Muui Video Review", "link": "https://youtu.be/vvgqitU3rA4" }],
      "longitude": 106.703858,
      "latitude": 10.7718442
    },
    {
      "name": "Quan An Ngon 138 (Quán Ăn Ngon 138)",
      "description": "A restaurant in District 1 that serves hearty Vietnamese cuisine.",
      "notes": "The restaurant has an entrance ramp, but it is very steep. The interior of the restaurant is equipped with an elevator leading to every floor.",
      "entrance": 0,
      "entranceNotes": "The entrance has a ramp, but it is very steep.",
      "bathroom": 0,
      "bathroomNodes": "The door to the large multi-stall bathroom can lock, and some wheelchair users may be able to make it work.",
      "links": [{"title": "Muui Video Review", "link": "https://youtu.be/UneNKPeLOaM" }],
      "longitude": 106.6976544,
      "latitude": 10.7773786
    },
    {
      "name": "Nam Giaon(Quán Nam Giao)",
      "description": "A restaurant in District 1 that serves Vietnamese Hue food.",
      "notes": "The entrance is not accessible, but there is outdoor seating at street level that is accessible.",
      "entrance": 0.5,
      "entranceNotes": "The small restaurant's entrance has a little step and it is not accessible. However, they do have outdoor seating at street-level tables.",
      "bathroom": 0,
      "bathroomNodes": "",
      "links": [{"title": "Muui Video Review", "link": "https://youtu.be/lsFo7futqok" }],
      "longitude": 106.6984438,
      "latitude": 10.7737275
    },
    {
      "name": "Japan Town Coffee Republic (Vietnam Coffee Republic)",
      "description": "A small coffee shop in Japantown.",
      "notes": "There is some seating at small street-level tables, but the coffee shop is not accessible and does not have a wheelchair accessible bathroom.",
      "entrance": 0,
      "entranceNotes": "",
      "bathroom": 0,
      "bathroomNodes": "",
      "links": [],
      "longitude": 106.7050579,
      "latitude": 10.779832
    },
    {
      "name": "Ben Thanh Night Market Food Stalls",
      "description": "Outdoor food stalls located in a large night market.",
      "notes": "",
      "entrance": 1,
      "entranceNotes": "The stalls are located on the streets outside of the market, and are accessible.",
      "bathroom": 0.5,
      "bathroomNodes": "The accessible public bathroom at Ben Thanh Market might be closed depending on how late it is.",
      "links": [{"title": "Muui Video Review", "link": "https://youtu.be/MCvUj13bhSk" }],
      "longitude": 106.697991,
      "latitude": 10.7725563
    },
    {
      "name": "Ben Thanh Market Food Stalls",
      "description": "A variety of Vietnamese food stalls located in a large market.",
      "notes": "The stalls are generally accessible, but it may be difficult to move through the tight crowds in the market.",
      "entrance": 1,
      "entranceNotes": "Some of the food stalls are close together, so it might be hard to navigate in a wheelchair.",
      "bathroom": 1,
      "bathroomNodes": "Ben Thanh Market is equipped with a wheelchair accessible bathroom near door #8.",
      "links": [{"title": "Muui Video Review", "link": "https://youtu.be/LIggt7h4e04" }],
      "longitude": 106.6985241,
      "latitude": 10.7727282
    },
    {
      "name": "Banh Xeo 335 (Bánh Xèo 335)",
      "description": "A popular street food spot near Banana Farm Market that only sells bánh xèo (savory pancakes).",
      "notes": "",
      "entrance": 1,
      "entranceNotes": "All of the restaurant's seating is outdoors at street level.",
      "bathroom": 0,
      "bathroomNodes": "There isn't an accessible bathroom nearby",
      "links": [{"title": "Muui Video Review", "link": "https://youtu.be/u-NnHVTIc-k" }],
      "longitude": 106.6824551,
      "latitude": 10.7754405
    }
   ];

var seedBathrooms = [
    {
      "name": "Public Bathroom at Ben Thanh Market Door #8",
      "notes": "The entrance to the public wheelchair accessible bathroom is located near Door #8 (the west entrance) on Phan Chu Trinh sctreet, across from Baby Spoon restaurant.",
      "longitude": 106.6974619,
      "latitude": 10.7725662
    },
    {
      "name": "Vincom Center B Shopping Mall",
      "notes": "A large shopping mall in the city center with a public wheelchair accessible restroom.",
      "longitude": 106.7021645,
      "latitude": 10.7779167
    },
    {
      "name": "Liberty Central Saigon Centre Hotel",
      "notes": "A hotel that is close to Ben Thanh Market. The bathroom is not technically open to the public, but you should be able to ask to use an accessible restroom reserved for guests.",
      "longitude": 106.698715,
      "latitude": 10.773684
    },
    {
      "name": "Park Hyatt Saigon hotel",
      "notes": "A few minutes away from the Notre Dame Cathedral and the Saigon Opera House. The bathroom is not technically open to the public, but you should be able to ask to use an accessible restroom reserved for guests.",
      "longitude": 106.7031014,
      "latitude": 10.7775
    },
    {
      "name": "New World Saigon Hotel",
      "notes": "5-minute walk away from Ben Thanh market and a 10-minute walk away from the Independence Palace. The bathroom is not technically open to the public, but you should be able to ask to use an accessible restroom reserved for guests.",
      "longitude": 106.6947847,
      "latitude": 10.7708829
    },
    {
      "name": "Tu Du Hospital bathroom",
      "notes": "A large public hospital with 2 gates. There is a wheelchair accessible bathroom on the first floor—you may have to ask a security guard to let you in.",
      "longitude": 106.6849709,
      "latitude": 10.7685558
    },
    {
      "name": "Tao Dan Park public bathroom",
      "notes": "Near the gate on Truong Dinh street. You may have to ask a staff person to unlock it.",
      "longitude": 106.6932052,
      "latitude": 10.7745951
    },
    {
      "name": "Tao Dan Park public bathroom",
      "notes": "Across from Saigon Star Hotel on Nguyen Thi Minh Khai street. You may have to ask a staff person to unlock it.",
      "longitude": 106.6907242,
      "latitude": 10.774964
    },
    {
      "name": "Bitexco Tower ground floor bathroom",
      "notes": "Located in the shoppin center on the ground floor of the tower",
      "longitude": 106.7044839,
      "latitude": 10.7715939
    },
    {
      "name": "23/9 Park public bathroom",
      "notes": "Located across from 52 Le Lai.",
      "longitude": 106.696845,
      "latitude": 10.7710906
    },
    {
      "name": "23/9 Park public bathroom",
      "notes": "",
      "longitude": 106.695642,
      "latitude": 10.769702
    }
];






db.City
.remove({})
.then(() =>
    db.City.create({
    name:"Ho Chi Minh",
    country: "Vietnam",
    latitude: 106.660172,
    longitude: 10.762622,
    transportation: `The city buses are not accessible, so wheelchair users will have to rely on taxis to get around. It may be difficult to coordinate for a taxi van, which is a barrier for power wheelchair users and in cases where transferring from a chair to a car is difficult. There are Vietnamese-language apps for hailing taxis from VinaSun and Mai Linh. Uber also operates in Vietnam as an option for people who can't read Vietnamese. Keep in mind that the traffic is notoriously bad and there are few traffic lights in the city, so use caution if you're visiting for the first time.`,
    terrain: `Because the sidewalks of Ho Chi Minh City are often crowded with people and motorbikes, pedestrians often walk in the road as well. Wheelchair users may find this easier than navigating around motobikes and inconsistent curb cuts. Note that there aren't many traffic lights in the city, so caution should be used when traveling on the road.`,
    links: [{
        url: "https://wikitravel.org/en/Ho_Chi_Minh_City",
        title: "Travel Wiki Page for Ho Chi Minh City"
    }]
    }).then(cityModel => {
        var sitePromises = [];
        for(s in seedSites){
            sitePromises.push(db.Locations.create(seedSites[s]))
        }
        Promise.all(sitePromises).then(values => {
            var ids = values.map(v => {return v._id});
            db.City.findOneAndUpdate({"_id": mongoose.Types.ObjectId(cityModel._id)}, {"sites": values})
            .then(() => console.log("SITES DONE"))
            .catch((err) => console.log(err));
        })

        var restaurantPromises = [];
        for(r in seedRestaurants){
            restaurantPromises.push(db.Locations.create(seedRestaurants[r]))
        }
        Promise.all(restaurantPromises).then(values => {
            var ids = values.map(v => {return v._id});
            db.City.findOneAndUpdate({"_id": mongoose.Types.ObjectId(cityModel._id)}, {"restaurants": values})
            .then(() => console.log("RESTAURANTS DONE"))
            .catch((err) => console.log(err));
        })

        var bathroomPromises = [];
        for(b in seedBathrooms){
            bathroomPromises.push(db.Bathrooms.create(seedBathrooms[b]))
        }
        Promise.all(bathroomPromises).then(values => {
            var ids = values.map(v => {return v._id});
            db.City.findOneAndUpdate({"_id": mongoose.Types.ObjectId(cityModel._id)}, {"bathrooms": values})
            .then(() => console.log("BATHROOMS DONE"))
            .catch((err) => console.log(err));
        })
    }).catch(err => console.log(err))
);