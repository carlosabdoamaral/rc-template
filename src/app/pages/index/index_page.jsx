import React, { Component } from "react";
import { TitleWidget } from "../../widgets/title/title_widget";
import "./index_page.scss";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "RC template",
      desc: "Repo de template para projetos ReactJS da equipe Dibba",
    };
  }

  render() {
    return <TitleWidget title={this.state.title} />;
  }
}
