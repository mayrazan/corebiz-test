import { Section } from "../../Section/Section";
import { Text } from "../../Text/Text";
import { Image } from "../../Image/Image";
import vtex from "../../../assets/images/vtex.png";
import corebiz from "../../../assets/images/corebiz.png";
import "./CreatedSection.scss";

export function CreatedSection() {
  return (
    <Section className="created">
      <div className="content">
        <Text text="Created by" className="text"/>
        <Image src={corebiz} alt="Corebiz" className="corebiz"/>
      </div>
      <div className="content">
        <Text text="Powered by" className="text"/>
        <Image src={vtex} alt="VTEX" className="img-vtex" />
      </div>
    </Section>
  );
}
