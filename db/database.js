const mysql = require('mysql2')
const {genders, ages, languages, surgeries} = require('./data')

// Create connection to the DB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
})

// connect to the the DB
db.connect((err) => {
    if (err) console.log(err.message);
    console.log("Connected to the DB")
});

// Create Database
db.query('CREATE DATABASE IF NOT EXISTS gistdemo', (err) => {
    if (err) console.log(err.message);
})


// Create Gender Table
const CREATE_TABLE_GENDER = "CREATE TABLE IF NOT EXISTS `gistdemo`.`genders` (" +
    "`id` INT NOT NULL AUTO_INCREMENT," +
    "`gender` VARCHAR(45) NULL," +
    "PRIMARY KEY (`id`));"

db.query(CREATE_TABLE_GENDER, (err, resulte)=>{
    if (err) console.log(err);
})


// Create Age Table
const CREATE_TABLE_AGES = "CREATE TABLE IF NOT EXISTS `gistdemo`.`ages` (" +
    "`id` INT NOT NULL AUTO_INCREMENT," +
    "`type` VARCHAR(45) NULL," +
    "`minage` INT NULL," +
    "`maxage` INT NULL," +
    "PRIMARY KEY (`id`));"

db.query(CREATE_TABLE_AGES, (err, resulte)=>{
    if (err) console.log(err);
})

// Create languages Table
const CREATE_TABLE_LANGUAGES = "CREATE TABLE IF NOT EXISTS `gistdemo`.`languages` (" +
    "`id` INT NOT NULL AUTO_INCREMENT," +
    "`language` VARCHAR(45) NULL," +
    "PRIMARY KEY (`id`));"

db.query(CREATE_TABLE_LANGUAGES, (err, resulte)=>{
    if (err) console.log(err);
})

// Create Surgeries Table
const CREATE_TABLE_SURGERY = "CREATE TABLE IF NOT EXISTS `gistdemo`.`surgeries` (" +
    "`id` INT NOT NULL AUTO_INCREMENT," +
    "`surgery` VARCHAR(45) NULL," +
    "PRIMARY KEY (`id`));"

db.query(CREATE_TABLE_SURGERY, (err, resulte)=>{
    if (err) console.log(err);
})

// Create gender Data
for (let i = 0; i < genders.length; i++ ) {
    db.query("INSERT INTO `gistdemo`.`genders` (id, gender) VALUES " +
    `('${0}', '${genders[i]}');`, (err, resulte)=>{
        if (err) console.log(err);
        else console.log(`Success ${genders[i]}`)
    })
}

// Create Ages Data
for (let i = 0; i < ages.length; i++ ) {
    db.query("INSERT INTO `gistdemo`.`ages` (id, type, minage, maxage) VALUES " +
    `('${0}', '${ages[i].type}', '${ages[i].minage}', '${ages[i].maxage}');`, (err, resulte)=>{
        if (err) console.log(err);
        else console.log(`Success ${ages[i].type}`)
    })
}


// Create languages Data
for (let i = 0; i < languages.length; i++ ) {
    db.query("INSERT INTO `gistdemo`.`languages` (id, language) VALUES " +
    `('${0}', '${languages[i]}');`, (err, resulte)=>{
        if (err) console.log(err);
        else console.log(`Success ${languages[i]}`)
    })
}

// Create surgery Data
for (let i = 0; i < surgeries.length; i++ ) {
    db.query("INSERT INTO `gistdemo`.`surgeries` (id, surgery) VALUES " +
    `('${0}', '${surgeries[i]}');`, (err, resulte)=>{
        if (err) console.log(err);
        else console.log(`Success ${surgeries[i]}`)
    })
}




