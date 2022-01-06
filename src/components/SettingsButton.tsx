import { openSettings } from "@/store"
import styled from "styled-components"
import { useDispatch } from "react-redux"

const padding = "64px"

const Wrapper = styled.div`
    position: absolute;
    width: 32px;
    height: 32px;
    top: ${padding};
    right: ${padding};
    background-image: url("./settings-outline.svg");
`

const SettingsButton = (): JSX.Element =>
{
	const dispatch = useDispatch()

	return <Wrapper onClick={ () => dispatch(openSettings()) } />
}

export default SettingsButton
