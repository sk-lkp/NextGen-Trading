
import { Button } from '@/components/ui/button';
import { fetchMarketChart } from '@/State/Coin/Action';
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';

const timeSeries = [
    {
        keyword:"DIGITAL_CURRENCY_DAILY",
        key: "Time Series (Daily)",
        lable: "1 Day",
        value: 1,
    },
    {
        keyword:"DIGITAL_CURRENCY_WEEKLY",
        key: "Weekly Time Series",
        lable: "7 Day",
        value: 7,
    },
    {
        keyword:"DIGITAL_CURRENCY_DAILY",
        key: "Monthly Time Series",
        lable: "1 Month",
        value: 30,
    },
];

const StockChart = ({coinId}) => {
    const dispatch = useDispatch()
    const {coin} = useSelector(store=>store)

    const [activeLable,setActiveLable] = useState("1 Day");
    
    const searies = [
        {
            data: //coin.marketChart.data,
           
            [
    [1720383124192, 57093.8631775054],
    [1720386096649, 57296.9666034579],
    [1720390176537, 56809.9441600874],
    [1720393696557, 56389.6510478226],
    [1720397381513, 55665.5075875367],
    [1720400867667, 54694.8645988471],
    [1720404573949, 55213.3881549033],
    [1720407905174, 55396.519708519],
    [1720411709725, 55025.2226036888],
    [1720415326003, 55785.061610609],
    [1720418996571, 55354.0189900753],
    [1720422686913, 55578.3290461959],
    [1720425767435, 55870.1148574179],
    [1720429434632, 57830.6303379777],
    [1720432826546, 57543.0271059303],
    [1720436975831, 57098.0557131077],
    [1720440046474, 57174.5236963758],
    [1720443922997, 57113.3039293836],
    [1720447869981, 57174.7610274587],
    [1720451310189, 56147.6676677504],
    [1720454879771, 55900.0729381379],
    [1720458199880, 55788.0651582827],
    [1720461990973, 56262.0759371943],
    [1720465687699, 56269.9506336519],
    [1720469326617, 56422.5255216875],
    [1720473109913, 56189.4726653633],
    [1720476670054, 56575.6391876632],
    [1720480284068, 56629.6426802431],
    [1720483894787, 56656.0775191409],
    [1720487534503, 56652.6701806612],
    [1720491123680, 56537.8939329877],
    [1720494104520, 57046.1772086356],
    [1720497628293, 57249.3305829323],
    [1720501369184, 57350.8062648443],
    [1720505318831, 57203.6704353874],
    [1720509216466, 57445.9605008927],
    [1720512165437, 57035.2978124632],
    [1720515692965, 57569.5635972335],
    [1720519672904, 57609.8352231341],
    [1720523264802, 57365.1796773146],
    [1720526526367, 57430.0750397804],
    [1720530316148, 57314.8130624149]
           ],  
        },
    ];
    const options = {
        chart:{
            id:"area-datetime",
            type:"area",
            height: 350,
            zoom:{
                autoScaleYaxis:true
            }
        },
        dataLabels:{
            enabled:false
        },
        xaxis:{
            type:"datetime",
            tickAmount:6
        },
        colors:["#800000"],
        markers:{
            colors:["#fff"],
            strokeColor:"#fff",
            size:0,
            strokeWidth:1,
            style:"hollow"
        },
        tooltip:{
            theme:"dark"
        },
        fill:{
            type:"gradient",
            gradient:{
                shadeIntensity:1,
                opacityFrom:0.7,
                opacityTo:0.9,
                stops:[0,100],
            }
        },
        grid:{
            borderColor:"#47535E",
            strokeDashArray:4,
            show:true,
        },

    }
    const handleActiveLable=(value)=>{
        setActiveLable(value);
    };

    useEffect(()=>{
        dispatch(fetchMarketChart({coinId,days:30,jwt:localStorage.getItem("jwt")}))
    }, [dispatch, coinId, activeLable])

  return  (

    <div> 
          <div className="space-x-3">
           {timeSeries.map((item) =>
             <Button
             variant={activeLable==item.lable?"":"outline"} 
             onClick={()=>handleActiveLable(item.lable)} key={item.lable}>
                {item.lable}
              </Button>)}

          </div>

        <div id="chart-timelines">
           <ReactApexChart 
              options={options}
              series={searies}
              height={450}
              type="area"
           />
        </div>

  </div>
  )
};

export default StockChart