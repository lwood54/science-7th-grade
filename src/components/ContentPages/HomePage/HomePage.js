import React, { Component } from "react";

import ContentCardTemplate from "../../Templates/ContentCardTemplate/ContentCardTemplate";
import NavigationBar from "../../Navigation/NavigationBar/NavigationBar";

import Unit1_1Obj from "../UnitContent/Unit1_1/Unit1_1Obj";
import Unit1_2Obj from "../UnitContent/Unit1_2/Unit1_2Obj";
import Unit2_1Obj from "../UnitContent/Unit2_1/Unit2_1Obj";
import Unit2_2Obj from "../UnitContent/Unit2_2/Unit2_2Obj";
import Unit3_1Obj from "../UnitContent/Unit3_1/Unit3_1Obj";
import Unit4_1Obj from "../UnitContent/Unit4_1/Unit4_1Obj";
import Unit4_2Obj from "../UnitContent/Unit4_2/Unit4_2Obj";
import Unit5_1Obj from "../UnitContent/Unit5_1/Unit5_1Obj";
import Unit5_2Obj from "../UnitContent/Unit5_2/Unit5_2Obj";
import Unit6_1Obj from "../UnitContent/Unit6_1/Unit6_1Obj";
import Unit6_2Obj from "../UnitContent/Unit6_2/Unit6_2Obj";

class HomePage extends Component {
	render() {
		return (
			<div>
				<NavigationBar
					title="Mr. Wood's Science Page"
					gameLink={null}
					quizletLink={null}
				/>
				{/* DESTRUCTURE object created for page content */}
				<ContentCardTemplate {...Unit1_1Obj} />
				<ContentCardTemplate {...Unit1_2Obj} />
				<ContentCardTemplate {...Unit2_1Obj} />
				<ContentCardTemplate {...Unit2_2Obj} />
				<ContentCardTemplate {...Unit3_1Obj} />
				<ContentCardTemplate {...Unit4_1Obj} />
				<ContentCardTemplate {...Unit4_2Obj} />
				<ContentCardTemplate {...Unit5_1Obj} />
				<ContentCardTemplate {...Unit5_2Obj} />
				<ContentCardTemplate {...Unit6_1Obj} />
				<ContentCardTemplate {...Unit6_2Obj} />
			</div>
		);
	}
}

export default HomePage;
