import React from 'react';
import {Container,CentralContainer,CentralContent1,VerticalLine1,VerticalLine2 ,CentralContent2,DoContent,DoContent1,DoContent2 ,BoldContent,ContentBox,Content,Content1} from "./HowWeDo.styles";

function HowWeDo() {
    return (
        <div>
            <Container >
                <CentralContainer>
                    <CentralContent1>
                        Through Operations
                    </CentralContent1>
                </CentralContainer>
                <ContentBox >
                    
                    <Content >
                        <DoContent >
                            <DoContent1>
                                Events
                            </DoContent1>
                            <VerticalLine1 />
                            <DoContent2 >
                                
                                    Events are planned/scheduled programs associated with any project, issue, or organization. These Events are scheduled for a limited duration of time. These plan of actions are conducted in different modes like  Workshops, Campaigns, Meetings, Summits, Conferences and Round Tables to accomplish the specific ends.                            
                                
                            </DoContent2>
                        </DoContent>

                        <DoContent >
                            <DoContent1>
                                Projects
                            </DoContent1>
                            <VerticalLine2 />
                            <DoContent2 >
                                
                                    Projects are intended for social change and are focused on certain outcomes - which can shape the global inclusiveness. These projects will operate until they are sustained with resources. These operations are also wide opened for organizational and institutional participation.
                                
                            </DoContent2>
                        </DoContent>
                        <BoldContent >
                            How we do our work?
                        </BoldContent>
                        <Content1>
                            Through meetings and digital interaction. We hold one-on-one and group discussions to deliver clear outcomes and action points of our work. We do our projects and programs to deliver inclusive and sustainable results.
                        </Content1>
                    </Content>
                </ContentBox>
            </Container>
        </div>
    )
};

export default HowWeDo;