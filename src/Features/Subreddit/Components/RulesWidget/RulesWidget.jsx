import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import { useState, useEffect } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import WidgetContainer from "../WidgetContainer/WidgetContainer";

import {
  Arrow,
  Description,
  Number,
  RuleContainer,
  RuleFex,
  Title,
} from "./RulesWidget.styled";

/**
 * show rules of the community
 *
 * @returns {React.Component}
 */
const RulesWidget = () => {
  const [rules, setRules] = useState([]);
  const { community } = useSubReddit();
  //rules
  // const rules = [
  //   { title: "t1", textDescription: "d1" },
  //   { title: "t2", textDescription: "d2" },
  //   { title: "t3", textDescription: "" },
  // ];

  // const rules = community[0].communityRules;
  useEffect(() => {
    community &&
      community.communityRules &&
      community.communityRules.length !== 0 &&
      setRules(community.communityRules);
  }, [community]);

  /**
   *
   * @param {number} index - order of rule
   * @param {number} len - the number of rules
   * @param {string} title - title of rule
   * @param {string} description - description of rule
   * @returns {React.Component} Rule component
   */
  const Rule = ({ index, len, title, description }) => {
    //to toggle the dropdown of description
    const [toggle, setToggle] = useState(true);
    //to check if will put description or not
    const desc = description.length === 0 ? false : true;
    //check the last rule so not adding line after it
    const last = index === len ? true : false;

    /**
     * onClick rule handler
     */
    function toggleHandler() {
      setToggle((prev) => !prev);
    }

    return (
      <RuleContainer onClick={toggleHandler} last={last} desc={desc}>
        <RuleFex>
          <Number>{index + "."}</Number>
          <Title>{title}</Title>
          <Arrow>
            {desc && toggle && (
              <span className="icon">
                <RiArrowDownSLine />
              </span>
            )}
            {desc && !toggle && (
              <span className="icon">
                <RiArrowUpSLine />
              </span>
            )}
          </Arrow>
        </RuleFex>
        {desc && !toggle && (
          <Description>
            <div>
              <p>{description}</p>
            </div>
          </Description>
        )}
      </RuleContainer>
    );
  };

  return (
    <WidgetContainer headerText="r/Eln2aa4yn Rules">
      {rules.length !== 0 &&
        rules.map((rule, i) => {
          return (
            <Rule
              key={i}
              index={i + 1}
              len={rules.length}
              title={rule.title}
              description={rule.description}
            />
          );
        })}
    </WidgetContainer>
  );
};

export default RulesWidget;
