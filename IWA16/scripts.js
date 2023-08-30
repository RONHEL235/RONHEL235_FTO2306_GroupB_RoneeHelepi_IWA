const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

  const createHtml = (athleteId) => {
  const { firstName, surname, races } = data.response.data[athleteId];
  const fragment = document.createDocumentFragment();

  let title = document.createElement('h2');
  title.id = athleteId; 
  fragment.appendChild(title);

  const list = document.createElement('dl');
  
  const recentRace = races[races.length - 1];
  const raceDate = new Date(recentRace.date);
  const raceTimes = recentRace.time

  const day = raceDate.getDate();
  const month = MONTHS[raceDate.getMonth()];
  const year = raceDate.getFullYear();

  const [first, second, third, fourth] = raceTimes
  const total = first + second + third + fourth;

  const hours = Math.floor(total / 60);
  const minutes = total % 60;

  list.innerHTML = /* html */ `
      <dt>Athlete: ${firstName} ${surname}</dt>

      <dt>Total Races: ${races.length}</dt>

      <dt>Event Date (Latest): ${day} ${month} ${year}</dt>

      <dt>Total Time (Latest): ${hours.toString().padStart(2, '0')}:${minutes}</dt>
  `;

  fragment.appendChild(list);
  return fragment;
};

// Append HTML content to elements with data-athlete attributes
document.querySelector('[data-athlete="NM372"]').appendChild(createHtml('NM372'));
document.querySelector('[data-athlete="SV782"]').appendChild(createHtml('SV782'));
