import React from 'react'
import useStore from '../../modules/store';
import Highcharts from "highcharts/highstock";
import bullet from "highcharts/modules/bullet.js";
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';

bullet(Highcharts);

const Detail = () => {
  const currentUser = useStore((state) => state.currentUser);
  const recordUser = useStore((state) => state.recordUser);
  const recordDetail = useStore((state) => state.recordDetail);

  const maxStrOptions = {
    chart: {
      height: 200,
      inverted: true,
      type: "bullet"
    },
    title: {
      text: '최대 근력'
    },    
    xAxis: {
      categories: [
        'L',
        'R'
      ],
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#4CAF50',
        targetOptions: {
          width: "200%"
        }
      }
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      enabled: false
    },
    yAxis: {
      gridLineWidth: 0,
      max: 400,
      plotBands: [
        {
          from: 280,
          to: 280,
          color: "#FF3D00"
        },
        {
          from: 350,
          to: 350,
          color: "#0D47A1"
        }
      ],
      title: {
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man</span>',
        align: 'high'
    },
    },
    series: [
      {
        data: [
          {
            y: recordDetail.maxStrL,
            // target: 250,
          },
          {
            y: recordDetail.maxStrR,
            // target: 310
          },
        ]
      }
    ],
  };

  const powerOptions = {
    chart: {
      height: 200,
      inverted: true,
      type: "bullet"
    },
    title: {
      text: '파워'
    },    
    xAxis: {
      categories: [
        'L',
        'R'
      ],
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#F44336',
        targetOptions: {
          width: "200%"
        }
      }
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      enabled: false
    },
    yAxis: {
      gridLineWidth: 0,
      max: 1100,
      plotBands: [
        {
          from: 800,
          to: 800,
          color: "#FF3D00"
        },
        {
          from: 1000,
          to: 1000,
          color: "#0D47A1"
        }
      ],
      title: {
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man</span>',
        align: 'high'
    },
    },
    series: [
      {
        data: [
          {
            y: recordDetail.powerL,
            // target: 250,
          },
          {
            y: recordDetail.powerR,
            // target: 310
          },
        ]
      }
    ],
  };

  const RSIAvgOptions = {
    chart: {
      height: 200,
      inverted: true,
      type: "bullet"
    },
    title: {
      text: '탄력(평균)'
    },    
    xAxis: {
      categories: [
        '1st',
        '2nd'
      ],
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#03A9F4',
        targetOptions: {
          width: "200%"
        }
      }
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      enabled: false
    },
    yAxis: {
      gridLineWidth: 0,
      max: 3.1,
      plotBands: [
        {
          from: 2.7,
          to: 2.7,
          color: "#FF3D00"
        },
        {
          from: 3.0,
          to: 3.0,
          color: "#0D47A1"
        }
      ],
      title: {
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man</span>',
        align: 'high'
    },
    },
    series: [
      {
        data: [
          {
            y: recordDetail.RSIAvg1st,
            // target: 250,
          },
          {
            y: recordDetail.RSIAvg2nd,
            // target: 310
          },
        ]
      }
    ],
  };

  const RSIMaxOptions = {
    chart: {
      height: 200,
      inverted: true,
      type: "bullet"
    },
    title: {
      text: '탄력(최대)'
    },    
    xAxis: {
      categories: [
        '1st',
        '2nd'
      ],
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#03A9F4',
        targetOptions: {
          width: "200%"
        }
      }
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      enabled: false
    },
    yAxis: {
      gridLineWidth: 0,
      max: 3.1,
      plotBands: [
        {
          from: 2.7,
          to: 2.7,
          color: "#FF3D00"
        },
        {
          from: 3.0,
          to: 3.0,
          color: "#0D47A1"
        }
      ],
      title: {
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man</span>',
        align: 'high'
    },
    },
    series: [
      {
        data: [
          {
            y: recordDetail.RSIMax1st,
            // target: 250,
          },
          {
            y: recordDetail.RSIMax2nd,
            // target: 310
          },
        ]
      }
    ],
  };

  const reactionRateOptions = {
    chart: {
      height: 200,
      inverted: true,
      type: "bullet"
    },
    title: {
      text: '반응속도'
    },    
    xAxis: {
      categories: [
        '1st',
        '2nd'
      ],
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#03A9F4',
        targetOptions: {
          width: "200%"
        }
      }
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      enabled: false
    },
    yAxis: {
      gridLineWidth: 0,
      max: 0.5,
      plotBands: [
        {
          from: 0.35,
          to: 0.35,
          color: "#FF3D00"
        },
        {
          from: 0.30,
          to: 0.30,
          color: "#0D47A1"
        }
      ],
      title: {
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man</span>',
        align: 'high'
    },
    },
    series: [
      {
        data: [
          {
            y: recordDetail.reactionRate1st,
            // target: 250,
          },
          {
            y: recordDetail.reactionRate2nd,
            // target: 310
          },
        ]
      }
    ],
  };

  const agilityFrontBackOptions = {
    chart: {
      height: 200,
      inverted: true,
      type: "bullet"
    },
    title: {
      text: '앞-뒤 패턴'
    },    
    xAxis: {
      categories: [
        '1st',
        '2nd'
      ],
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#9C27B0',
        targetOptions: {
          width: "200%"
        }
      }
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      enabled: false
    },
    yAxis: {
      gridLineWidth: 0,
      max: 32,
      plotBands: [
        {
          from: 28,
          to: 28,
          color: "#FF3D00"
        },
        {
          from: 30,
          to: 30,
          color: "#0D47A1"
        }
      ],
      title: {
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man</span>',
        align: 'high'
    },
    },
    series: [
      {
        data: [
          {
            y: recordDetail.agilityFrontBack1st,
            // target: 250,
          },
          {
            y: recordDetail.agilityFrontBack2nd,
            // target: 310
          },
        ]
      }
    ],
  };

  const agilityLeftRightOptions = {
    chart: {
      height: 200,
      inverted: true,
      type: "bullet"
    },
    title: {
      text: '좌-우 패턴'
    },    
    xAxis: {
      categories: [
        '1st',
        '2nd'
      ],
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#9C27B0',
        targetOptions: {
          width: "200%"
        }
      }
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      enabled: false
    },
    yAxis: {
      gridLineWidth: 0,
      max: 32,
      plotBands: [
        {
          from: 28,
          to: 28,
          color: "#FF3D00"
        },
        {
          from: 30,
          to: 30,
          color: "#0D47A1"
        }
      ],
      title: {
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man</span>',
        align: 'high'
    },
    },
    series: [
      {
        data: [
          {
            y: recordDetail.agilityLeftRight1st,
            // target: 250,
          },
          {
            y: recordDetail.agilityLeftRight2nd,
            // target: 310
          },
        ]
      }
    ],
  };

  const bodyRotationAbilityOptions = {
    chart: {
      height: 200,
      inverted: true,
      type: "bullet"
    },
    title: {
      text: '평균 회전 속도'
    },    
    xAxis: {
      categories: [
        'L',
        'R'
      ],
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#FF9800',
        targetOptions: {
          width: "200%"
        }
      }
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      enabled: false
    },
    yAxis: {
      gridLineWidth: 0,
      max: 4.0,
      plotBands: [
        {
          from: 3.0,
          to: 3.0,
          color: "#FF3D00"
        },
        {
          from: 3.5,
          to: 3.5,
          color: "#0D47A1"
        }
      ],
      title: {
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man</span>',
        align: 'high'
    },
    },
    series: [
      {
        data: [
          {
            y: recordDetail.bodyRotationAbilityL,
            // target: 250,
          },
          {
            y: recordDetail.bodyRotationAbilityR,
            // target: 310
          },
        ]
      }
    ],
  };

  const gripStrengthOptions = {
    chart: {
      height: 200,
      inverted: true,
      type: "bullet"
    },
    title: {
      text: '악력'
    },    
    xAxis: {
      categories: [
        'L',
        'R'
      ],
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#E91E63',
        targetOptions: {
          width: "200%"
        }
      }
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      enabled: false
    },
    yAxis: {
      gridLineWidth: 0,
      max: 65,
      plotBands: [
        {
          from: 40,
          to: 40,
          color: "#FF3D00"
        },
        {
          from: 60,
          to: 60,
          color: "#0D47A1"
        }
      ],
      title: {
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man</span>',
        align: 'high'
    },
    },
    series: [
      {
        data: [
          {
            y: recordDetail.gripStrengthL,
            // target: 250,
          },
          {
            y: recordDetail.gripStrengthR,
            // target: 310
          },
        ]
      }
    ],
  };

  return (
    <Container className='container'>
      <div className="content-wrap">
        <div className="user-info">
          <table>
            <thead>
              <tr>
                <th scope='col'>날짜</th>
                <th scope='col'>연령</th>
                <th scope='col'>신장</th>
                <th scope='col'>체중</th>
                <th scope='col'>이름</th>
                <th scope='col'>성별</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{recordDetail.date}</td>
                <td></td>
                <td>{currentUser.isAdmin ? recordUser.height : currentUser.height}cm</td>
                <td>{currentUser.isAdmin ? recordUser.weight : currentUser.weight}kg</td>
                <td>{currentUser.isAdmin ? recordUser.name : currentUser.name}</td>
                <td>{currentUser.isAdmin ? recordUser.gender : currentUser.gender}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>1. 근력 및 파워</h2>
        <HighchartsReact highcharts={ Highcharts } options={ maxStrOptions }/>
        <HighchartsReact highcharts={ Highcharts } options={ powerOptions }/>
        <h2>2. 탄력 및 반응속도</h2>
        <HighchartsReact highcharts={ Highcharts } options={ RSIAvgOptions }/>
        <HighchartsReact highcharts={ Highcharts } options={ RSIMaxOptions }/>
        <HighchartsReact highcharts={ Highcharts } options={ reactionRateOptions }/>
        <h2>3. 민첩성</h2>
        <HighchartsReact highcharts={ Highcharts } options={ agilityFrontBackOptions }/>
        <HighchartsReact highcharts={ Highcharts } options={ agilityLeftRightOptions }/>
        <h2>4. 몸통 회전 능력</h2>
        <HighchartsReact highcharts={ Highcharts } options={ bodyRotationAbilityOptions }/>
        <h2>5. 악력</h2>
        <HighchartsReact highcharts={ Highcharts } options={ gripStrengthOptions }/>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .content-wrap {
    .user-info {
      margin-bottom: 2rem;
      font-size: 1.4rem;
      table {
        width: 100%;
        th, td {
          border: 1px solid #ddd;
          text-align: center;
        }
      }
    }
    h2 {
      margin-top: 3rem;
      font-size: 1.6rem;
    }
  }
`;

export default Detail