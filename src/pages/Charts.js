import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeadcountChart from '../components/HeadcountChart';
import TurnoverChart from '../components/Turnover';

function Charts() {
  const [headcount, setHeadCount] = useState(null);
  const [turnover, setTurnover] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingHeadcount, setIsLoadingHeadcount] = useState(true);
  const [isLoadingTurnover, setIsLoadingTurnover] = useState(true);

  const location = useLocation();
  const email = location.state.email;

  // const BASE_URL = 'https://z64iardwce.execute-api.us-east-1.amazonaws.com/dev/api/v1/payroll/';

  useEffect(() => {
    try {
      fetchHeadcount();
      fetchTurnover();
    } catch (error) {
      console.error('Ocorreu um erro: ', error);
    }
  }, []);

  const checkLoadingStatus = () => {
    if (!isLoadingHeadcount && !isLoadingTurnover) setIsLoading(false);
  }

  const fetchHeadcount = async () => {
    // const response = await fetch(`${BASE_URL}headcount/${email}`);
    // const data = await response.json();
    const data = {
      headcount: [
        {
            month: "2021-03",
            count: 17
        },
        {
            month: "2021-04",
            count: 18
        },
        {
            month: "2021-05",
            count: 19
        },
        {
            month: "2021-06",
            count: 21
        },
        {
            month: "2021-07",
            count: 24
        },
        {
            month: "2021-08",
            count: 22
        },
        {
            month: "2021-09",
            count: 25
        },
        {
            month: "2021-10",
            count: 23
        },
        {
            month: "2021-11",
            count: 23
        },
        {
            month: "2021-12",
            count: 24
        },
        {
            month: "2022-01",
            count: 23
        },
        {
            month: "2022-02",
            count: 23
        },
        {
            month: "2022-03",
            count: 23
        },
        {
            month: "2022-04",
            count: 23
        },
        {
            month: "2022-05",
            count: 24
        },
        {
            month: "2022-06",
            count: 25
        },
        {
            month: "2022-07",
            count: 27
        },
        {
            month: "2022-08",
            count: 28
        },
        {
            month: "2022-09",
            count: 30
        },
        {
            month: "2022-10",
            count: 30
        },
        {
            month: "2022-11",
            count: 30
        },
        {
            month: "2022-12",
            count: 30
        },
        {
            month: "2023-01",
            count: 30
        },
        {
            month: "2023-02",
            count: 30
        },
        {
            month: "2023-03",
            count: 30
        },
        {
            month: "2023-04",
            count: 30
        },
        {
            month: "2023-05",
            count: 30
        },
        {
            month: "2023-06",
            count: 30
        },
        {
            month: "2023-07",
            count: 30
        },
        {
            month: "2020-08",
            count: 5
        },
        {
            month: "2020-09",
            count: 7
        },
        {
            month: "2020-10",
            count: 8
        },
        {
            month: "2020-11",
            count: 8
        },
        {
            month: "2020-12",
            count: 10
        },
        {
            month: "2021-01",
            count: 10
        },
        {
            month: "2021-02",
            count: 13
        },
        {
            month: "2020-03",
            count: 1
        },
        {
            month: "2020-04",
            count: 2
        },
        {
            month: "2020-05",
            count: 2
        },
        {
            month: "2020-06",
            count: 3
        },
        {
            month: "2020-07",
            count: 3
        }
      ]
    }
    setHeadCount(data);
    setIsLoadingHeadcount(false);
    checkLoadingStatus();
  }

  const fetchTurnover = async () => {
    // const response = await fetch(`${BASE_URL}turnover/${email}`);
    // const data = await response.json();
    const data = {
      "turnover": [
        {
          "month": "2022-08",
          "value": 0.014705882352941176
        },
        {
          "month": "2022-09",
          "value": 0.014285714285714285
        },
        {
          "month": "2022-10",
          "value": 0.013888888888888888
        },
        {
          "month": "2022-11",
          "value": 0
        },
        {
          "month": "2022-12",
          "value": 0
        },
        {
          "month": "2023-01",
          "value": 0
        },
        {
          "month": "2023-02",
          "value": 0.014084507042253521
        },
        {
          "month": "2023-03",
          "value": 0.02857142857142857
        },
        {
          "month": "2023-04",
          "value": 0.014705882352941176
        },
        {
          "month": "2023-05",
          "value": 0
        },
        {
          "month": "2023-06",
          "value": 0
        },
        {
          "month": "2023-07",
          "value": 0
        },
        {
          "month": "2021-08",
          "value": 0
        },
        {
          "month": "2021-09",
          "value": 0.05660377358490566
        },
        {
          "month": "2021-10",
          "value": 0.01818181818181818
        },
        {
          "month": "2021-11",
          "value": 0
        },
        {
          "month": "2021-12",
          "value": 0.016129032258064516
        },
        {
          "month": "2022-01",
          "value": 0.03225806451612903
        },
        {
          "month": "2022-02",
          "value": 0.016129032258064516
        },
        {
          "month": "2022-03",
          "value": 0.04838709677419355
        },
        {
          "month": "2022-04",
          "value": 0.03225806451612903
        },
        {
          "month": "2022-05",
          "value": 0.016129032258064516
        },
        {
          "month": "2022-06",
          "value": 0
        },
        {
          "month": "2022-07",
          "value": 0.029850746268656716
        },
        {
          "month": "2020-01",
          "value": 0
        },
        {
          "month": "2020-02",
          "value": 0
        },
        {
          "month": "2020-03",
          "value": 0
        },
        {
          "month": "2020-04",
          "value": 0
        },
        {
          "month": "2020-05",
          "value": 0
        },
        {
          "month": "2020-06",
          "value": 0
        },
        {
          "month": "2020-07",
          "value": 0
        },
        {
          "month": "2020-08",
          "value": 0
        },
        {
          "month": "2020-09",
          "value": 0
        },
        {
          "month": "2020-10",
          "value": 0
        },
        {
          "month": "2020-11",
          "value": 0
        },
        {
          "month": "2020-12",
          "value": 0
        },
        {
          "month": "2021-01",
          "value": 0
        },
        {
          "month": "2021-02",
          "value": 0.06666666666666667
        },
        {
          "month": "2021-03",
          "value": 0.02857142857142857
        },
        {
          "month": "2021-04",
          "value": 0
        },
        {
          "month": "2021-05",
          "value": 0
        },
        {
          "month": "2021-06",
          "value": 0.047619047619047616
        },
        {
          "month": "2021-07",
          "value": 0.08888888888888889
        },
        {
          "month": "2023-08",
          "value": 1
        }
      ]
    }
    setTurnover(data);
    setIsLoadingTurnover(false);
    checkLoadingStatus();
  }

  if (isLoading) {
    return (
      <div>Carregando...</div>
    );
  }

  return (
    <div>
      <h1>{email}</h1>
      <h1>Payroll Charts</h1>
      <h2>Headcount</h2>

      <HeadcountChart data={ headcount } />

      <h2>Turnover</h2>

      <TurnoverChart data={ turnover } />

    </div>
  );
}

export default Charts;