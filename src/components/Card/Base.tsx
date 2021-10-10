import Button from "@/components/Button"
import React from "react"
import media from "styled-media-query"
import styled from "styled-components"

type Props = {
    category: string,
    iconPath?: string,
    link: `${"http" | "https"}://${string}`,
    title: string,
    description: string,
}

const Container = styled(Button)`
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: start;
    max-width: 90%;
    padding: 24px;
    gap: 16px;
    top: 32px;
`

const Header = styled.div`
    border-bottom: solid hsla(0, 0%, 0%, 0.025) 2px;
`

const Category = styled.p`
    font-size: 16px;
    margin-bottom: 8px;
`

const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 24px;
`

const Icon = styled.img`
    width: 96px;
    height: 96px;
    ${media.lessThan("large")`
        width: 64px;
        height: 64px;
    `}
    border-radius: 100%;
`

const Content = styled.div`
`

const Title = styled.p`
    display: flex;
    font-size: 24px;
    ${media.lessThan("large")`
        font-size: 16px;
    `}
    margin-bottom: 8px;

    &::after {
        content: "";
        background-image: url("./open-outline.svg");
        width: 24px;
        height: 24px;
        margin: auto 8px;
    }
`

const Description = styled.p`
    font-size: 18px;
    ${media.lessThan("large")`
        display: none;
    `}
`

const Base: React.FC<Props> = props =>
{
	return (
		<Container onClick={ () => window.open(props.link) }>
			<Header>
				<Category>{ props.category }</Category>
			</Header>
			<Body>
				{ props.iconPath && <Icon src={ props.iconPath } /> }
				<Content>
					<Title>{ props.title }</Title>
					<Description>{ props.description }</Description>
				</Content>
			</Body>
		</Container>
	)
}

export default Base
