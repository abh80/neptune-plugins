export default `
.quality-tag {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0 8px;
	height: 18px;
	font-size: 12px;
	line-height: 20px;
	border-radius: 6px;
	color: rgba(0, 0, 0, 0.87); /* Text color */
	box-sizing: border-box;
	transition: background-color 0.2s;
	margin-left: 5px;
}
.tag-mqa {
	background-color: #e6c200; /* Less saturated golden color */
}
.tag-hr {
	background-color: #b9f2ff; /* Brighter diamond-like color */
}
.tag-atmos {
	background-color: #0052a3; /* Dark blue color */
}
`;
