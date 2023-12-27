import {
	FlowTextContainer,
	FlowTextContent,
	FlowTextContentShadow,
} from "./styles";

interface FlowTextProps {
  children:React.ReactNode
  height:string
}

export const FlowText: React.FC<FlowTextProps> = ({children,height}) => {
	return (
		<FlowTextContainer height={height}>
			<FlowTextContent>{children}</FlowTextContent>
			<FlowTextContentShadow>{children}</FlowTextContentShadow>
		</FlowTextContainer>
	);
};
