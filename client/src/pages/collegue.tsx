import { useList } from "@refinedev/core";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


import { AgentCard, CustomButton } from "components";
import { Navigate } from "react-router-dom";

const Colleagues = () => {
    const { data, isLoading, isError } = useList({ resource: "users" });

    const allAgents = data?.data ?? [];


    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                Champions List
            </Typography>

            <Box
                mt="20px"
              
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    backgroundColor: "#fcfcfc",

                }}

            >
                {allAgents.map((agent) => (
                    <AgentCard
                        key={agent._id}
                        id={agent._id}
                        name={agent.name}
                        email={agent.email}
                        avatar={agent.avatar}
                        noOfActivities={agent.allActivities.length}
                        week={agent.week}
                    />
                ))}
                <CustomButton title={""} backgroundColor={""} color={""} />
            </Box>
        </Box>
    );
};

export default Colleagues;
