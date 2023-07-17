import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Charts() {
  const [headcount, setHeadCount] = useState([]);
  const [turnover, setTurnover] = useState([]);
  const location = useLocation();
  const email = location.state;

  // const BASE_URL = 'https://z64iardwce.execute-api.us-east-1.amazonaws.com/dev/api/v1/payroll/';

  useEffect(() => {
    // fetchHeadcount();
    // fetchTurnover();
    try {
      fetchHeadcount();
      fetchTurnover();
    } catch (error) {
      console.error('Ocorreu um erro: ', error);
    }
    console.log('TURNOVER', turnover);
    console.log('HEADCOUNT', headcount);
  }, []);

  const fetchHeadcount = async () => {
    // const response = await fetch(`${BASE_URL}headcount/${email}`);
    // const data = await response.json();
    const data = {
      headcount: [
        {
            "month": "2021-03",
            "count": 17
        },
        {
            "month": "2021-04",
            "count": 18
        },
        {
            "month": "2021-05",
            "count": 19
        },
        {
            "month": "2021-06",
            "count": 21
        },
        {
            "month": "2021-07",
            "count": 24
        },
        {
            "month": "2021-08",
            "count": 22
        },
        {
            "month": "2021-09",
            "count": 25
        },
        {
            "month": "2021-10",
            "count": 23
        },
        {
            "month": "2021-11",
            "count": 23
        },
        {
            "month": "2021-12",
            "count": 24
        },
        {
            "month": "2022-01",
            "count": 23
        },
        {
            "month": "2022-02",
            "count": 23
        },
        {
            "month": "2022-03",
            "count": 23
        },
        {
            "month": "2022-04",
            "count": 23
        },
        {
            "month": "2022-05",
            "count": 24
        },
        {
            "month": "2022-06",
            "count": 25
        },
        {
            "month": "2022-07",
            "count": 27
        },
        {
            "month": "2022-08",
            "count": 28
        },
        {
            "month": "2022-09",
            "count": 30
        },
        {
            "month": "2022-10",
            "count": 30
        },
        {
            "month": "2022-11",
            "count": 30
        },
        {
            "month": "2022-12",
            "count": 30
        },
        {
            "month": "2023-01",
            "count": 30
        },
        {
            "month": "2023-02",
            "count": 30
        },
        {
            "month": "2023-03",
            "count": 30
        },
        {
            "month": "2023-04",
            "count": 30
        },
        {
            "month": "2023-05",
            "count": 30
        },
        {
            "month": "2023-06",
            "count": 30
        },
        {
            "month": "2023-07",
            "count": 30
        },
        {
            "month": "2020-08",
            "count": 5
        },
        {
            "month": "2020-09",
            "count": 7
        },
        {
            "month": "2020-10",
            "count": 8
        },
        {
            "month": "2020-11",
            "count": 8
        },
        {
            "month": "2020-12",
            "count": 10
        },
        {
            "month": "2021-01",
            "count": 10
        },
        {
            "month": "2021-02",
            "count": 13
        },
        {
            "month": "2020-03",
            "count": 1
        },
        {
            "month": "2020-04",
            "count": 2
        },
        {
            "month": "2020-05",
            "count": 2
        },
        {
            "month": "2020-06",
            "count": 3
        },
        {
            "month": "2020-07",
            "count": 3
        }
      ]
    }
    setHeadCount(data.headcount);
  }

  const fetchTurnover = async () => {
    // const response = await fetch(`${BASE_URL}turnover/${email}`);
    // const data = await response.json();
    const data = {
      turnover: [
        {month: '2021-03', value: 0},
        {month: '2021-04', value: 0},
        {month: '2021-05', value: 0},
        {month: '2021-06', value: 0.047619047619047616},
        {month: '2021-07', value: 0.125},
        {month: '2021-08', value: 0},
        {month: '2021-09', value: 0.12},
        {month: '2021-10', value: 0},
        {month: '2021-11', value: 0},
        {month: '2021-12', value: 0.041666666666666664},
        {month: '2022-01', value: 0},
        {month: '2022-02', value: 0},
        {month: '2022-03', value: 0.043478260869565216},
        {month: '2022-04', value: 0},
        {month: '2022-05', value: 0},
        {month: '2022-06', value: 0},
        {month: '2022-07', value: 0},
        {month: '2022-08', value: 0},
        {month: '2022-09', value: 0},
        {month: '2022-10', value: 0},
        {month: '2022-11', value: 0},
        {month: '2022-12', value: 0},
        {month: '2023-01', value: 0},
        {month: '2023-02', value: 0},
        {month: '2023-03', value: 0},
        {month: '2023-04', value: 0},
        {month: '2023-05', value: 0},
        {month: '2023-06', value: 0},
        {month: '2023-07', value: 0},
        {month: '2020-08', value: 0},
        {month: '2020-09', value: 0},
        {month: '2020-10', value: 0},
        {month: '2020-11', value: 0},
        {month: '2020-12', value: 0},
        {month: '2021-01', value: 0},
        {month: '2021-02', value: 0.07692307692307693},
        {month: '2020-03', value: 0},
        {month: '2020-04', value: 0},
        {month: '2020-05', value: 0},
        {month: '2020-06', value: 0},
        {month: '2020-07', value: 0},
      ]
    }
    setTurnover(data.turnover);
  }

  return (
    <div>
      <h1>Payroll Charts</h1>

      <h2>Headcount</h2>

      { headcount.map((elem, index) => (
          <p key={index}>{elem.month}: {elem.count}</p>
      )) }

      <h2>Turnover</h2>
      
      { turnover.map((elem, index) => (
          <p key={index}>{elem.month}: {elem.value}</p>
      )) }
    </div>
  );
}

export default Charts;