import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import landing from './landing'
import project from "./project";
import heroSchema from "./Hero/heroSchema";
import aboutSchema from "./About/aboutSchema";
import projectSchema from "./Project/projectSchema";
import contactSchema from "./contact/contactSchema";
import imageSchema from "./image/imageSchema";
import buttonGridSchema from "./ButtonGrid/button-grid-schema"
import journey from "./Journey/journey";
import imageText from "./imageText/image-text"
import button from "./button";
import badges from "./badges";
import columns from './columns'
import column from './column'
import social from "./socials";
import resumeSchema from "./Resume/resumeSchema";

export default createSchema({
  name: 'portfolio_sanity',
  types: schemaTypes.concat([
    landing,
    project,
    ...heroSchema,
    ...aboutSchema,
    ...contactSchema,
    ...resumeSchema,
      ...projectSchema,
    ...imageSchema,
    ...buttonGridSchema,
    journey,
    imageText,
    button,
    badges,
    social,
    columns,
    column,
  ]),
})
