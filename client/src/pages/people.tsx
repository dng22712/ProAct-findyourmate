import { useList } from "@refinedev/core";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDelete, useGetIdentity, useShow } from "@refinedev/core";
import { useParams, useNavigate } from "react-router-dom";
import { AgentCard, CustomButton } from "components";
import axios from "axios";


const People = () => {
    const { data, isLoading, isError } = useList({ resource: "users" });
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const allAgents = data?.data ?? [];
    // const agents = data?.data ?? {}
    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                Agents List
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
                    <Stack>
                        <AgentCard
                            key={agent._id}
                            id={agent._id}
                            name={agent.name}
                            email={agent.email}
                            avatar={agent.avatar}
                            noOfActivities={agent.allActivities.length}
                            week={agent.week}
                        />

                        <CustomButton
                            title={"Add Colleague"}
                            backgroundColor={
                                "#d42e2e"
                            }
                            color="#FCFCFC"
                            fullWidth
                            handleClick={async () => {
                                const { data } = await axios.patch(`http://localhost:8080/api/v1/users/add-friend/${user.email}`, {
                                    friend: agent.email
                                });
                                console.log(`${agent.email} as Friend Added`);
                                
                            }}

                        />

                    </Stack>
                ))}
            </Box>



        </Box>
    );
};

export default People;
