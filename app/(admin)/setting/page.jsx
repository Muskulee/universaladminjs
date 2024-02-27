"use client";

import { useMemo, useState } from "react";
import Layout from "./../layout";
import { Card, CardBody, Chip, Tab, Tabs } from "@nextui-org/react";
import { CgDesignmodo, CgWebsite } from "react-icons/cg";
import { MdEmail, MdPayment } from "react-icons/md";
import GeneralSettings from "./GeneralSettings";
import PaymentSettings from "./PaymentSettings";
import EmailSettings from "./EmailSettings";
import BrandSettings from "./BrandSettings";

// type SettingProps = {
//   SettingTabs: Array<string>;
// };

const Setting = () => {
  const [item, setItem] = useState("General");
  const [content, setContent] = useState(<></>);

  const defaultC = `Whatever Settings Component Goes Here!`;
  const SettingTabs = [
    {
      title: "General",
      key: "General",
      icon: <CgWebsite />,
    },
    {
      title: "Branding",
      key: "Branding",
      icon: <CgDesignmodo />,
    },
    {
      title: "Payment",
      key: "Payment",
      icon: <MdPayment />,
    },
    {
      title: "Email",
      key: "Email",
      icon: <MdEmail />,
    },
    // {
    //   title: "Storage",
    //   key: "Storage",
    //   icon: <MdSdStorage />,
    // },

    // {
    //   title: "Bill",
    //   key: "Bill",
    //   icon: <FaMoneyBillTrendUp />,
    // },
  ];

  useMemo(() => {
    switch (item) {
      case "General":
        setContent(<GeneralSettings />);
        break;

      case "Branding":
        setContent(<BrandSettings />);
        break;

      case "Payment":
        setContent(<PaymentSettings />);
        break;

      case "Email":
        setContent(<EmailSettings />);
        break;

      default:
        setContent(<div>{defaultC}</div>);
        break;
    }
  }, [item, defaultC]);

  return (
    <>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          size="lg"
          color="danger"
          variant="bordered"
          selectedKey={item}
          onSelectionChange={setItem}
        >
          {SettingTabs.map((setting, index) => {
            return (
              <Tab
                key={setting.key}
                title={
                  <div className="flex items-center space-x-2">
                    <span>{setting.icon}</span>
                    <span> {setting.title}</span>
                  </div>
                }
              >
                <Card>
                  <CardBody>{content}</CardBody>
                </Card>
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

Setting.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Setting;
