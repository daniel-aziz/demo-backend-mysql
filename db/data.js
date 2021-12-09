const ages = [
    {
        type:"Infant",
        minage:0,
        maxage:2
    },
    {
        type:"Child",
        minage:3,
        maxage:12
    },
    {
        type:"Teen",
        minage:13,
        maxage:18
    },
    {
        type:"Adult",
        minage:19,
        maxage:40
    },
    {
        type:"Middle Age",
        minage:41,
        maxage:60
    },
    {
        type:"Senior",
        minage:61,
        maxage:120
    },
]

const genders = [
    "MALE",
    "FEMALE"
]

const languages = [
    "Hebrew",
    "English",
    "Spanish",
    "French",
    "Arabic",
    "Amharic",
    "Russian",
    "German",
    "Yiddish",
]

const surgeries = [
    "Appendectomy",
    "Breast biopsy",
    "Carotid endarterectomy",
    "Cataract surgery",
    "Cesarean section",
    "Cholecystectomy",
    "Coronary artery bypass",
    "Low back pain surgery",
    "Prostatectomy"
]

module.exports = {genders, ages, languages, surgeries}