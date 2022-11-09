import React from 'react'
import Highcharts from "highcharts/highstock";
import useStore from '../../modules/store';
import bullet from "highcharts/modules/bullet.js";
import HighchartsReact from 'highcharts-react-official';
import { compareAsc, format } from 'date-fns'
import styled from 'styled-components';

bullet(Highcharts);

const Record = ({ records, handleRecordDetail }) => {
  const recordUser = useStore((state) => state.recordUser);

  // 자세히 보기
  const onRecordDetail = (e) => {
    const recordDetail = records.data.records.filter((r) => format(new Date(r.date), 'yyyy. MM. dd') === e.point.category);
    handleRecordDetail(recordDetail[0]);
  }

  /* Data */

  const maxStr = records.data.records.map((r) => {
    let data = null;
    data = {
      categories: format(new Date(r.date), 'yyyy. MM. dd'),
      maxStrL: r.maxStrL,
      maxStrR: r.maxStrR,
    };
    return data;
  });

  const power = records.data.records.map((r) => {
    let data = null;
    data = {
      categories: format(new Date(r.date), 'yyyy. MM. dd'),
      powerL: r.powerL,
      powerR: r.powerR,
    };
    return data;
  });

  const RSIAvg = records.data.records.map((r) => {
    let data = null;
    data = {
      categories: format(new Date(r.date), 'yyyy. MM. dd'),
      RSIAvg1st: r.RSIAvg1st,
      RSIAvg2nd: r.RSIAvg2nd,
    };
    return data;
  });

  const RSIMax = records.data.records.map((r) => {
    let data = null;
    data = {
      categories: format(new Date(r.date), 'yyyy. MM. dd'),
      RSIMax1st: r.RSIMax1st,
      RSIMax2nd: r.RSIMax2nd,
    };
    return data;
  });

  const reactionRate = records.data.records.map((r) => {
    let data = null;
    data = {
      categories: format(new Date(r.date), 'yyyy. MM. dd'),
      reactionRate1st: r.reactionRate1st,
      reactionRate2nd: r.reactionRate2nd,
    };
    return data;
  });

  const agilityFrontBack = records.data.records.map((r) => {
    let data = null;
    data = {
      categories: format(new Date(r.date), 'yyyy. MM. dd'),
      agilityFrontBack1st: r.agilityFrontBack1st,
      agilityFrontBack2nd: r.agilityFrontBack2nd,
    };
    return data;
  });

  const agilityLeftRight = records.data.records.map((r) => {
    let data = null;
    data = {
      categories: format(new Date(r.date), 'yyyy. MM. dd'),
      agilityLeftRight1st: r.agilityLeftRight1st,
      agilityLeftRight2nd: r.agilityLeftRight2nd,
    };
    return data;
  });

  const bodyRotationAbility = records.data.records.map((r) => {
    let data = null;
    data = {
      categories: format(new Date(r.date), 'yyyy. MM. dd'),
      bodyRotationAbilityL: r.bodyRotationAbilityL,
      bodyRotationAbilityR: r.bodyRotationAbilityR,
    };
    return data;
  });

  const gripStrength = records.data.records.map((r) => {
    let data = null;
    data = {
      categories: format(new Date(r.date), 'yyyy. MM. dd'),
      gripStrengthL: r.gripStrengthL,
      gripStrengthR: r.gripStrengthR,
    };
    return data;
  });

  /* Options */

  const maxStrOptions = {
    title: {
      text: '최대 근력'
    },
    yAxis: {
      title: {
        text: null
      }
    },
    xAxis: {
      categories: maxStr.map((d) => (d.categories)),
    },
    accessibility: {
      enabled: false
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        cursor: 'pointer',
        point: {
          events: {
            click: (e) => onRecordDetail(e)
          }
        }
      }
    },
    series: [
      {
        name: 'L',
        data: maxStr.map((d) => (d.maxStrL)),
      },
      {
        name: 'R',
        data: maxStr.map((d) => (d.maxStrR))
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  const powerOptions = {
    title: {
      text: '파워'
    },
    yAxis: {
      title: {
        text: null
      }
    },
    xAxis: {
      categories: power.map((d) => (d.categories)),
    },
    accessibility: {
      enabled: false
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        cursor: 'pointer',
        point: {
          events: {
            click: (e) => onRecordDetail(e)
          }
        }
      }
    },
    series: [
      {
        name: 'L',
        data: power.map((d) => (d.powerL)),
      },
      {
        name: 'R',
        data: power.map((d) => (d.powerR))
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  const RSIAvgOptions = {
    title: {
      text: '탄력(평균)'
    },
    yAxis: {
      title: {
        text: null
      }
    },
    xAxis: {
      categories: RSIAvg.map((d) => (d.categories)),
    },
    accessibility: {
      enabled: false
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        cursor: 'pointer',
        point: {
          events: {
            click: (e) => onRecordDetail(e)
          }
        }
      }
    },
    series: [
      {
        name: '1st',
        data: RSIAvg.map((d) => (d.RSIAvg1st)),
      },
      {
        name: '2nd',
        data: RSIAvg.map((d) => (d.RSIAvg2nd))
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  const RSIMaxOptions = {
    title: {
      text: '탄력(최대)'
    },
    yAxis: {
      title: {
        text: null
      }
    },
    xAxis: {
      categories: RSIMax.map((d) => (d.categories)),
    },
    accessibility: {
      enabled: false
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        cursor: 'pointer',
        point: {
          events: {
            click: (e) => onRecordDetail(e)
          }
        }
      }
    },
    series: [
      {
        name: '1st',
        data: RSIMax.map((d) => (d.RSIMax1st)),
      },
      {
        name: '2nd',
        data: RSIMax.map((d) => (d.RSIMax2nd))
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  const reactionRateOptions = {
    title: {
      text: '반응속도'
    },
    yAxis: {
      title: {
        text: null
      }
    },
    xAxis: {
      categories: reactionRate.map((d) => (d.categories)),
    },
    accessibility: {
      enabled: false
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        cursor: 'pointer',
        point: {
          events: {
            click: (e) => onRecordDetail(e)
          }
        }
      }
    },
    series: [
      {
        name: '1st',
        data: reactionRate.map((d) => (d.reactionRate1st)),
      },
      {
        name: '2nd',
        data: reactionRate.map((d) => (d.reactionRate2nd))
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  const agilityFrontBackOptions = {
    title: {
      text: '앞-뒤 패턴'
    },
    yAxis: {
      title: {
        text: null
      }
    },
    xAxis: {
      categories: agilityFrontBack.map((d) => (d.categories)),
    },
    accessibility: {
      enabled: false
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        cursor: 'pointer',
        point: {
          events: {
            click: (e) => onRecordDetail(e)
          }
        }
      }
    },
    series: [
      {
        name: '1st',
        data: agilityFrontBack.map((d) => (d.agilityFrontBack1st)),
      },
      {
        name: '2nd',
        data: agilityFrontBack.map((d) => (d.agilityFrontBack2nd))
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  const agilityLeftRightOptions = {
    title: {
      text: '좌-우 패턴'
    },
    yAxis: {
      title: {
        text: null
      }
    },
    xAxis: {
      categories: agilityLeftRight.map((d) => (d.categories)),
    },
    accessibility: {
      enabled: false
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        cursor: 'pointer',
        point: {
          events: {
            click: (e) => onRecordDetail(e)
          }
        }
      }
    },
    series: [
      {
        name: '1st',
        data: agilityLeftRight.map((d) => (d.agilityLeftRight1st)),
      },
      {
        name: '2nd',
        data: agilityLeftRight.map((d) => (d.agilityLeftRight2nd))
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  const bodyRotationAbilityOptions = {
    title: {
      text: '평균 회전 속도'
    },
    yAxis: {
      title: {
        text: null
      }
    },
    xAxis: {
      categories: bodyRotationAbility.map((d) => (d.categories)),
    },
    accessibility: {
      enabled: false
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        cursor: 'pointer',
        point: {
          events: {
            click: (e) => onRecordDetail(e)
          }
        }
      }
    },
    series: [
      {
        name: 'L',
        data: bodyRotationAbility.map((d) => (d.bodyRotationAbilityL)),
      },
      {
        name: 'R',
        data: bodyRotationAbility.map((d) => (d.bodyRotationAbilityR))
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  const gripStrengthOptions = {
    title: {
      text: '평균 회전 속도'
    },
    yAxis: {
      title: {
        text: null
      }
    },
    xAxis: {
      categories: gripStrength.map((d) => (d.categories)),
    },
    accessibility: {
      enabled: false
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        cursor: 'pointer',
        point: {
          events: {
            click: (e) => onRecordDetail(e)
          }
        }
      }
    },
    series: [
      {
        name: 'L',
        data: gripStrength.map((d) => (d.gripStrengthL)),
      },
      {
        name: 'R',
        data: gripStrength.map((d) => (d.gripStrengthR))
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  return (
    <Container className='container' >
      <div className="content-wrap">
        <h1>{recordUser.name}</h1>
        <h2>1. 근력 및 파워</h2>
        <HighchartsReact highcharts={ Highcharts } options={ maxStrOptions } />
        <HighchartsReact highcharts={ Highcharts } options={ powerOptions } />
        <h2>2. 탄력 및 반응속도</h2>
        <HighchartsReact highcharts={ Highcharts } options={ RSIAvgOptions } />
        <HighchartsReact highcharts={ Highcharts } options={ RSIMaxOptions } />
        <HighchartsReact highcharts={ Highcharts } options={ reactionRateOptions } />
        <h2>3. 민첩성</h2>
        <HighchartsReact highcharts={ Highcharts } options={ agilityFrontBackOptions } />
        <HighchartsReact highcharts={ Highcharts } options={ agilityLeftRightOptions } />
        <h2>4. 몸통 회전 능력</h2>
        <HighchartsReact highcharts={ Highcharts } options={ bodyRotationAbilityOptions } />
        <h2>5. 악력</h2>
        <HighchartsReact highcharts={ Highcharts } options={ gripStrengthOptions } />
      </div>
    </Container>
  )
}

const Container = styled.div `
  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  h2 {
    margin-top: 3rem;
    font-size: 1.6rem;
  }
`;

export default Record