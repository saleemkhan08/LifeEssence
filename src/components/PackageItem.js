import React, { Component } from 'react'

export class PackageItem extends Component {
    state = {
        name: "",
        description: "",
        price: "1800 SR",
        period: "28 Days",
        meals: "3",
        appetizer: "2",
        snacks: "3",
        mealsDesc: "",
        appetizerDesc: "",
        periodOptions: [],
        isExpanded: false
    }

    componentDidMount() {
        const periodOptions = [];

        const { name, description, meals, mealsDesc, snacks, appetizer,
            period1, period2, period1Price, period2Price, appetizerDesc } = this.props;

        if (period1) {
            periodOptions.push({ price: period1Price, period: period1 })
        }
        if (period2) {
            periodOptions.push({ price: period2Price, period: period2 })
        }
        this.setState({
            name,
            periodOptions,
            description,
            meals,
            mealsDesc,
            snacks,
            appetizer,
            appetizerDesc
        })
    }

    render() {
        const { name, description, meals, mealsDesc, snacks, appetizer, appetizerDesc, period, price,
            periodOptions, isExpanded } = this.state;
        let className = "col-lg-4 col-md-6 col-12 site-animate"
        if (this.props.colSize && this.props.colSize === "6") {
            className = "col-md-6 col-12 site-animate"
        }

        return (
            <div className={className}>
                <div className="packages-container">
                    <h2 className="packages-title center">{name}</h2>
                    <h4 className="site-sub-title center">{description}</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Period</td>
                                <td className="center">
                                    {period}
                                </td>
                            </tr>
                            <tr>
                                <td>Meals</td>
                                <td className="center" data-toggle="tooltip" data-placement="top"
                                    title={mealsDesc ? mealsDesc : ""}>
                                    {meals}
                                </td>
                            </tr>
                            <tr>
                                <td>Snacks</td>
                                <td className="center">{snacks}</td>
                            </tr>
                            <tr>
                                <td>Appetizer</td>
                                <td className="center" data-toggle="tooltip" data-placement="top"
                                    title={appetizerDesc ? appetizerDesc : ""}>
                                    {appetizer}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="btn-group btn-full w-100">
                        <button type="button" className="btn btn-primary w-100"
                            onClick={() => {
                                alert("Coming Soon")
                            }}>
                            {"Subscribe @ " + price}
                        </button>
                        {periodOptions.length > 1 ?
                            <button type="button"
                                className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                onClick={() => {
                                    this.setState({ isExpanded: !this.state.isExpanded })
                                }}>
                                <span className="sr-only">Toggle Dropdown</span>
                            </button> : ""}
                    </div>
                    <div className={isExpanded ? "collapse show" : "collapse"}>
                        <div className="btn-group-vertical btn-full w-100">
                            {periodOptions.map(({ price, period }) => {
                                return <button className="btn btn-primary btn-full w-100"
                                    onClick={() => {
                                        this.setState({ price, period, isExpanded: !this.state.isExpanded })
                                    }}>
                                    {period + " @ " + price}
                                </button>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PackageItem
