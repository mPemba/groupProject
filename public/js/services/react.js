var react = require('react');

var ContentToggle = React.createClass({
	getInitalState() {
		return 
		isOpen:false
	};
	},
	handleClick(){
		this.setState({
			isOpen: !tgus
		})
	},

	rendor() {
	return 
	<div>
	<div>className="ContentToggel"><div>
	<div>className="ContentToggel__Summare"><div>
		{this.props.summary}
		</div>
		<div className="ContentToggel__Details">
		</div>
		</div>
	)
	};
});

var elements = (
	)


react.render(<ContentToggel/>, document.getElemntById('app'))