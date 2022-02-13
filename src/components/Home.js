import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order online for touchless delivery"
                backgroundImg="modesl-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model Y"
                description="Order online for touchless delivery"
                backgroundImg="modesl-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model 3"
                description="Order online for touchless delivery"
                backgroundImg="modesl-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model X"
                description="Order online for touchless delivery"
                backgroundImg="modesl-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar for new roof"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`