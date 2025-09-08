const date = new Date(2013, 3)
function employment(startDate){
    const endMMYY = new Date();
    const startMMYY = new Date(startDate);
    const [startMonth, startYear] = startMMYY.split('.').map(Number);
    const [endMonth, endYear] = endMMYY.split('.').map(Number);
    const fullStartYear = 2000 + startYear;
    const fullEndYear = 2000 + endYear;
    const totalMonths = (fullEndYear - fullStartYear) * 12 + (endMonth - startMonth);
    return totalMonths;
};
const experience = {
    "job title": "Электромонтер станционного оборудования",
    organization: 'АО "Связьтранснефть"',
    locality: "Кузбасс, г. Мариинск",
    start: date.toLocaleString(),
    stage: employment(start),
    functional: [],
    skills: [],
    softskills:[],
    about: " ",
    achievements:[
        {
        title: "Научно-техническая конференция молодых специалистов(НТКМ)",
        topic: "",
        year: 2014,
        techologies: "",
        nomination: "",
        },
        {
        title: "Научно-техническая конференция молодых специалистов(НТКМ)",
        topic: "",
        year: 2015,
        techologies: "",
        nomination: "",
        },
        {
        title: "Научно-техническая конференция молодых специалистов(НТКМ)",
        topic: "",
        year: 2016,
        techologies: "",
        nomination: "",
        },
    ]
};
export default experience; 