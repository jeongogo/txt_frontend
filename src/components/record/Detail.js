import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../modules/store';
import Highcharts from "highcharts/highstock";
import bullet from "highcharts/modules/bullet.js";
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';

bullet(Highcharts);

const Detail = () => {
  const navigate = useNavigate();
  const currentUser = useStore((state) => state.currentUser);
  const recordUser = useStore((state) => state.recordUser);
  const recordDetail = useStore((state) => state.recordDetail);
  const [age, setAge] = useState('');

  const onModify = (id) => {
    navigate(`/record/detail/${id}/modify`)
  }

  useEffect(() => {
    const today = new Date();
    const birthday = new Date(recordUser.birthday);
    setAge(today.getFullYear() - birthday.getFullYear() + 1);
    window.scrollTo(0, 0);
  }, [recordUser.birthday]);

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
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon 280</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man 350</span>',
        align: 'high'
      },
    },
    tooltip: {
    	formatter: function() {
        return `<strong>${this.y}</strong>`;
       }
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
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon 800</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man 1000</span>',
        align: 'high'
      },
    },
    tooltip: {
    	formatter: function() {
        return `<strong>${this.y}</strong>`;
       }
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
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon 2.7</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man 3.0</span>',
        align: 'high'
      },
    },
    tooltip: {
    	formatter: function() {
        return `<strong>${this.y}</strong>`;
       }
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
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon 2.7</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man 3.0</span>',
        align: 'high'
      },
    },
    tooltip: {
    	formatter: function() {
        return `<strong>${this.y}</strong>`;
       }
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
        color: '#FFCA28',
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
    yAxis: [
      {
        visible: false,
        min: 0.2,
        max: 0.6,
      },
      {
        min: 0.2,
        max: 0.6,
        reversed: true,
        gridLineWidth: 0,
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
          text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon 0.35</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man 0.30</span>',
          align: 'high'
        },
      },
    ],
    tooltip: {
      formatter: function() {
        const point = this.point;  
        return `<strong>${point.originalY}</strong>`
      }
    },
    series: [
      {
        data: [
          {
            y: 0.82 - recordDetail.reactionRate1st,
            originalY: recordDetail.reactionRate1st
            // target: 250,
          },
          {
            y: 0.82 - recordDetail.reactionRate2nd,
            originalY: recordDetail.reactionRate2nd
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
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon 28</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man 30</span>',
        align: 'high'
      },
    },
    tooltip: {
    	formatter: function() {
        return `<strong>${this.y}</strong>`;
       }
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
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon 28</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man 30</span>',
        align: 'high'
      },
    },
    tooltip: {
    	formatter: function() {
        return `<strong>${this.y}</strong>`;
       }
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
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon 3.0</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man 3.5</span>',
        align: 'high'
      },
    },
    tooltip: {
    	formatter: function() {
        return `<strong>${this.y}</strong>`;
       }
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
        text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon 40</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man 60</span>',
        align: 'high'
      },
    },
    tooltip: {
    	formatter: function() {
        return `<strong>${this.y}</strong>`;
       }
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

  const proAgilityOptions = {
    chart: {
      height: 200,
      inverted: true,
      type: "bullet"
    },
    title: {
      text: '방향 전환 능력'
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
    yAxis: [
      {
        visible: false,
        min: 1,
        max: 11,
      },
      {
        min: 1,
        max: 11,
        reversed: true,
        gridLineWidth: 0,
        plotBands: [
          {
            from: 4.4,
            to: 4.4,
            color: "#FF3D00"
          },
          {
            from: 4,
            to: 4,
            color: "#0D47A1"
          }
        ],
        title: {
          text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon 4.4</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man 4.0</span>',
          align: 'high'
        },
      }
    ],
    tooltip: {
      formatter: function() {
        const point = this.point;  
        return `<strong>${point.originalY}</strong>`
      }
    },
    series: [
      {
        data: [
          {
            y: 12.3 - recordDetail.proAgility1st,
            originalY: recordDetail.proAgility1st,
          },
          {
            y: 12.3 - recordDetail.proAgility2nd,
            originalY: recordDetail.proAgility2nd,
          },
        ]
      }
    ],
  };

  const sprintOptions = {
    chart: {
      height: 200,
      inverted: true,
      type: "bullet",
    },
    title: {
      text: '전력질주 능력'
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
        color: '#5C6BC0',
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
    yAxis: [
      {
        visible: false,
        min: 1,
        max: 3,
      },
      {
        min: 1,
        max: 3,
        reversed: true,
        gridLineWidth: 0,
        plotBands: [
          {
            from: 1.6,
            to: 1.6,
            color: "#FF3D00"
          },
          {
            from: 1.4,
            to: 1.4,
            color: "#0D47A1"
          }
        ],
        title: {
          text: '<span style="font-weight: bold; color: #FF3D00">Elite Womon 1.6</span>&nbsp;&nbsp;<span style="font-weight: bold; color: #0D47A1">Elite Man 1.4</span>',
          align: 'high'
        },
      },
    ],
    tooltip: {
      formatter: function() {
        const point = this.point;  
        return `<strong>${point.originalY}</strong>`  
      }
    },
    series: [
      {
        data: [
          {
            y: 4.1 - recordDetail.sprint1st,
            originalY: recordDetail.sprint1st,
          },
          {
            y: 4.1 - recordDetail.sprint2nd,
            originalY: recordDetail.sprint2nd,
          },
        ]
      }
    ],
  };

  return (
    <Container className='container'>
      <div className="content-wrap">
        <div className="btns">
          <button type='button' className='btn sm gray' onClick={() => navigate(`/record/${recordDetail.userId}`)}>뒤로가기</button>
          {currentUser.isAdmin &&
            <button type='button' className='btn sm red' onClick={() => onModify(recordDetail._id)}>수정하기</button>
          }
        </div>
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
                <td>{age}</td>
                <td>{currentUser.isAdmin ? recordUser.height : currentUser.height}cm</td>
                <td>{currentUser.isAdmin ? recordUser.weight : currentUser.weight}kg</td>
                <td>{currentUser.isAdmin ? recordUser.name : currentUser.name}</td>
                <td>{currentUser.isAdmin ? recordUser.gender : currentUser.gender}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>1. 근력 및 파워</h2>
        <div className="box">
          <HighchartsReact highcharts={ Highcharts } options={ maxStrOptions }/>
          <div className="levels">
            <h3>L</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (recordDetail.maxStrL / 350) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
            <h3>R</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (recordDetail.maxStrR / 350) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
          </div>
        </div>
        <div className="box">
          <HighchartsReact highcharts={ Highcharts } options={ powerOptions }/>
          <div className="levels">
            <h3>L</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (recordDetail.powerL / 1000) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
            <h3>R</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (recordDetail.powerR / 1000) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
          </div>
        </div>
        <h2>2. 탄력 및 반응속도</h2>
        <div className="box">
          <HighchartsReact highcharts={ Highcharts } options={ RSIAvgOptions }/>
          <div className="levels">
            <h3>1st</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (recordDetail.RSIAvg1st / 3) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
            <h3>2nd</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (recordDetail.RSIAvg2nd / 3) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
          </div>
        </div>
        <div className="box">
          <HighchartsReact highcharts={ Highcharts } options={ RSIMaxOptions }/>
          <div className="levels">
            <h3>1st</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (recordDetail.RSIMax1st / 3) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
            <h3>2nd</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (recordDetail.RSIMax2nd / 3) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
          </div>
        </div>
        <div className="box">
          <HighchartsReact highcharts={ Highcharts } options={ reactionRateOptions }/>
          <div className="levels">
            <h3>1st</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (0.3 / recordDetail.reactionRate1st) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
            <h3>2nd</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (0.3 / recordDetail.reactionRate2nd) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
          </div>
        </div>
        <h2>3. 민첩성</h2>
        <div className="box">
          <HighchartsReact highcharts={ Highcharts } options={ agilityFrontBackOptions }/>
          <div className="levels">
            <h3>1st</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (recordDetail.agilityFrontBack1st / 30) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
            <h3>2nd</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (recordDetail.agilityFrontBack2nd / 30) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
          </div>
        </div>
        <div className="box">
          <HighchartsReact highcharts={ Highcharts } options={ agilityLeftRightOptions }/>
          <div className="levels">
            <h3>1st</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (recordDetail.agilityLeftRight1st / 30) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
            <h3>2nd</h3>
            <div className="level">
              <div className="bar"></div>
              <div className="current" style={{ left: (recordDetail.agilityLeftRight2nd / 30) * 100 + '%' }}>▼</div>
              <span className="level-1">매우 부족</span>
              <span className="level-2">부족</span>
              <span className="level-3">보통</span>
              <span className="level-4">우수</span>
              <span className="level-5">매우 우수</span>
            </div>
          </div>
        </div>
        {recordUser.mainEvent === 'tennis' &&
          (
            <>
              <h2>4. 몸통 회전 능력</h2>
              <div className="box">
                <HighchartsReact highcharts={ Highcharts } options={ bodyRotationAbilityOptions } />
                <div className="levels">
                  <h3>L</h3>
                  <div className="level">
                    <div className="bar"></div>
                    <div className="current" style={{ left: (recordDetail.bodyRotationAbilityL / 3.5) * 100 + '%' }}>▼</div>
                    <span className="level-1">매우 부족</span>
                    <span className="level-2">부족</span>
                    <span className="level-3">보통</span>
                    <span className="level-4">우수</span>
                    <span className="level-5">매우 우수</span>
                  </div>
                  <h3>R</h3>
                  <div className="level">
                    <div className="bar"></div>
                    <div className="current" style={{ left: (recordDetail.bodyRotationAbilityR / 3.5) * 100 + '%' }}>▼</div>
                    <span className="level-1">매우 부족</span>
                    <span className="level-2">부족</span>
                    <span className="level-3">보통</span>
                    <span className="level-4">우수</span>
                    <span className="level-5">매우 우수</span>
                  </div>
                </div>
              </div>
              <h2>5. 악력</h2>
              <div className="box">
                <HighchartsReact highcharts={ Highcharts } options={ gripStrengthOptions } />
                <div className="levels">
                  <h3>1st</h3>
                  <div className="level">
                    <div className="bar"></div>
                    <div className="current" style={{ left: (recordDetail.gripStrengthL / 60) * 100 + '%' }}>▼</div>
                    <span className="level-1">매우 부족</span>
                    <span className="level-2">부족</span>
                    <span className="level-3">보통</span>
                    <span className="level-4">우수</span>
                    <span className="level-5">매우 우수</span>
                  </div>
                  <h3>2nd</h3>
                  <div className="level">
                    <div className="bar"></div>
                    <div className="current" style={{ left: (recordDetail.gripStrengthR / 60) * 100 + '%' }}>▼</div>
                    <span className="level-1">매우 부족</span>
                    <span className="level-2">부족</span>
                    <span className="level-3">보통</span>
                    <span className="level-4">우수</span>
                    <span className="level-5">매우 우수</span>
                  </div>
                </div>
              </div>
            </>
          )
        }
        {recordUser.mainEvent === 'football' &&
          (
            <>
              <h2>4. 방향 전환 능력</h2>
              <div className="box">
                <HighchartsReact highcharts={ Highcharts } options={ proAgilityOptions } />
                <div className="levels">
                  <h3>1st</h3>
                  <div className="level">
                    <div className="bar"></div>
                    <div className="current" style={{ left: (4 / recordDetail.proAgility1st) * 100 + '%' }}>▼</div>
                    <span className="level-1">매우 부족</span>
                    <span className="level-2">부족</span>
                    <span className="level-3">보통</span>
                    <span className="level-4">우수</span>
                    <span className="level-5">매우 우수</span>
                  </div>
                  <h3>2nd</h3>
                  <div className="level">
                    <div className="bar"></div>
                    <div className="current" style={{ left: (4 / recordDetail.proAgility2nd) * 100 + '%' }}>▼</div>
                    <span className="level-1">매우 부족</span>
                    <span className="level-2">부족</span>
                    <span className="level-3">보통</span>
                    <span className="level-4">우수</span>
                    <span className="level-5">매우 우수</span>
                  </div>
                </div>
              </div>
              <h2>5. 전력질주 능력</h2>
              <div className="box">
                <HighchartsReact highcharts={ Highcharts } options={ sprintOptions } />
                <div className="levels">
                  <h3>1st</h3>
                  <div className="level">
                    <div className="bar"></div>
                    <div className="current" style={{ left: (1.4 / recordDetail.sprint1st) * 100 + '%' }}>▼</div>
                    <span className="level-1">매우 부족</span>
                    <span className="level-2">부족</span>
                    <span className="level-3">보통</span>
                    <span className="level-4">우수</span>
                    <span className="level-5">매우 우수</span>
                  </div>
                  <h3>2nd</h3>
                  <div className="level">
                    <div className="bar"></div>
                    <div className="current" style={{ left: (1.4 / recordDetail.sprint2nd) * 100 + '%' }}>▼</div>
                    <span className="level-1">매우 부족</span>
                    <span className="level-2">부족</span>
                    <span className="level-3">보통</span>
                    <span className="level-4">우수</span>
                    <span className="level-5">매우 우수</span>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
    </Container>
  )
}

const Container = styled.div`
  .content-wrap {
    .box {
      margin: 2rem 0;
      padding: 2rem;
      box-shadow: 0 0 30px rgba(0,0,0,0.1);
      border-radius: 3rem;
    }
    .levels {
      margin: 1rem 6rem;
      h3 {
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
        text-align: center;
      }
      .level {
        position: relative;
        padding: 2.6rem 0;
        .current {
          position: absolute;
          top: 0.6rem;
          font-size: 1.6rem;
          color: #D32F2F;
        }
        .bar {
          height: 3rem;
          background: linear-gradient(90deg, rgba(164,75,75,1) 0%, rgba(205,203,44,1) 50%, rgba(51,145,26,1) 100%);
          border-radius: 2rem;
        }
        span {
          position: absolute;
          top: 0;
          font-size: 1.4rem;
          &.level-1 {
            left: 0;
          }
          &.level-2 {
            left: 25%;
          }
          &.level-3 {
            left: 50%;
          }
          &.level-4 {
            left: 75%;
          }
          &.level-5 {
            right: 0;
          }
        }
      }
    }
    .user-info {
      margin-bottom: 4rem;
      font-size: 1.4rem;
      table {
        width: 100%;
        border: 1px solid #aaa;
        border-collapse: collapse;
        th, td {
          padding: 1rem;
          border: 1px solid #aaa;
          text-align: center;
        }
        th {
          background-color: #eee;
        }
      }
    }
    h2 {
      margin-top: 4rem;
      font-size: 1.6rem;
    }
    .btns {
      display: flex;
      margin-bottom: 2rem;
      button {
        &:nth-of-type(2) {
          margin-left: 1rem;
        }
      }
    }
  }
`;

export default Detail