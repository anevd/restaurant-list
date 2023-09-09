import React from "react";
import { Button, Result } from "antd";
import { Link, useParams } from "react-router-dom";

function Error() {
	const { errorType } = useParams();
	return (
		<Result
			status={errorType}
			title={errorType}
			subTitle="Sorry, something went wrong."
			extra={
				<Link to="/restaurants">
					<Button type="primary green-8">Back Home</Button>
				</Link>
			}
		/>
	);
}

export default Error;
