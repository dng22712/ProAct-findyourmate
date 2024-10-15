import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArrowCircleUpRounded from "@mui/icons-material/ArrowCircleUpRounded";
import { Component, useState, useEffect } from "react";
import axios from 'axios';
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";
import { useGetIdentity } from "@refinedev/core";

function TotalRevenue(){
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const [options, setTotalRevenueOptions] = useState( TotalRevenueOptions);
    const [TotalRevenueSeries, setTotalRevenueSeries] = useState([]);

    const getPayload = () => {
        axios.get(`http://localhost:8080/api/v1/activities/metrics/${user.email}`)
        .then(({data}) => {
            setTotalRevenueOptions({ ...TotalRevenueOptions, ...data.TotalRevenueOptions });
            setTotalRevenueSeries(data.TotalRevenueSeries);
        });
    }

    useEffect(() => {
        getPayload();
    }, []);

    return (
        <Box
            p={4}
            flex={1}
            bgcolor="#fcfcfc"
            id="chart"
            display="flex"
            flexDirection="column"
            borderRadius="15px"
        >
            <Typography fontSize={18} fontWeight={600} color="#11142d">
                Total points 
            </Typography>

            <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
                <Typography fontSize={28} fontWeight={700} color="#11142d">
                    {115*10}
                </Typography>
                <Stack direction="row" alignItems="center" gap={1}>
                    <ArrowCircleUpRounded
                        sx={{ fontSize: 25, color: "#475be8" }}
                    />
                    <Stack>
                        <Typography fontSize={15} color="#475be8">
                            0.8%
                        </Typography>
                        <Typography fontSize={12} color="#808191">
                            Than Last Month
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <ReactApexChart
                series={TotalRevenueSeries}
                type="bar"
                height={310}
                options={options}
            />
        </Box>
    ); 
}

// class TotalRevenue extends Component {
//     state = {
//         TotalRevenueOptions: TotalRevenueOptions,
//         TotalRevenueSeries: []
//     }

//     componentDidMount = async () => {
//         let {data} = await axios.get('http://localhost:8080/api/v1/activities/metrics');
//         console.log(data);
//         const options = { ...TotalRevenueOptions, ...data.TotalRevenueOptions }
//         this.setState({TotalRevenueOptions: options, TotalRevenueSeries: data.TotalRevenueSeries});
//     }

//     render = () => {
//         return (
//             <Box
//                 p={4}
//                 flex={1}
//                 bgcolor="#fcfcfc"
//                 id="chart"
//                 display="flex"
//                 flexDirection="column"
//                 borderRadius="15px"
//             >
//                 <Typography fontSize={18} fontWeight={600} color="#11142d">
//                     Total Revenue
//                 </Typography>

//                 <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
//                     <Typography fontSize={28} fontWeight={700} color="#11142d">
//                         $236,535
//                     </Typography>
//                     <Stack direction="row" alignItems="center" gap={1}>
//                         <ArrowCircleUpRounded
//                             sx={{ fontSize: 25, color: "#475be8" }}
//                         />
//                         <Stack>
//                             <Typography fontSize={15} color="#475be8">
//                                 0.8%
//                             </Typography>
//                             <Typography fontSize={12} color="#808191">
//                                 Than Last Month
//                             </Typography>
//                         </Stack>
//                     </Stack>
//                 </Stack>

//                 <ReactApexChart
//                     series={this.state.TotalRevenueSeries}
//                     type="bar"
//                     height={310}
//                     options={this.state.TotalRevenueOptions}
//                 />
//             </Box>
//         );
//     }
// }

export default TotalRevenue;
