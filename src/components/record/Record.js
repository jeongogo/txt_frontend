import React, { useEffect, useState } from 'react'
import Highcharts from "highcharts/highstock";
import bullet from "highcharts/modules/bullet.js";
import HighchartsReact from 'highcharts-react-official';
import { compareAsc, format } from 'date-fns'
import styled from 'styled-components';

bullet(Highcharts);

const Record = ({ records, handleRecordDetail }) => {
  const [data, setData] = useState({
    categories: [],
    maxStrL: [],
    maxStrR: [],
  });

  const onRecordDetail = (e) => {
    const recordDetail = records.data.records.filter((r) => format(new Date(r.date), 'yyyy. MM. dd') === e.point.category);
    handleRecordDetail(recordDetail[0]);
  }

  const options = {
    title: {
      text: '최대 근력'
    },
    yAxis: {
      title: {
        text: null
      }
    },
    xAxis: {
      categories: data.categories,
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
            click: (e) => onRecordDetail(e, 'maxStr')
          }
        }
      }
    },
    series: [
      {
        name: 'L',
        data: data.maxStrL
      },
      {
        name: 'R',
        data: data.maxStrR
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

  useEffect(() => {
    records.data.records.map((r) => {
      setData({
        ...data,
        categories: data.categories.concat(format(new Date(r.date), 'yyyy. MM. dd')),
        maxStrL: data.maxStrL.concat(r.maxStrL),
        maxStrR: data.maxStrR.concat(r.maxStrR),
      });
    });
  }, []);

  return (
    <Container className='container' >
      <div className="content-wrap">
        <HighchartsReact highcharts={ Highcharts } options={ options } />
      </div>
    </Container>
  )
}

const Container = styled.div `
  
`;

export default Record