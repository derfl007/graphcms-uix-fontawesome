import {
  FieldExtensionFeature,
  FieldExtensionType,
  useUiExtension,
  Wrapper,
} from "@graphcms/uix-react-sdk";
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css";
import { fontAwesome } from "../icons";

function IconSelection() {
  const { value, onChange } = useUiExtension();
  const FontIconPicker = require("@fonticonpicker/react-fonticonpicker");

  return (
    <div
      style={{
        margin: "-8px",
      }}
    >
      <Head>
        <title />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.9/css/all.css"
        />
      </Head>
      <FontIconPicker
        icons={fontAwesome}
        value={value}
        onChange={(v) => onChange(v)}
        isMulti={false}
      />
    </div>
  );
}

export default function ExtensionPage() {
  const router = useRouter();

  const { extensionUid } = router.query;

  if (!extensionUid) return <p>No extensionId</p>;

  const declaration = {
    extensionType: "field",
    fieldType: FieldExtensionType.STRING,
    name: "Font Awesome Icon",
    features: [FieldExtensionFeature.FieldRenderer],
  };

  return (
    <Wrapper uid={extensionUid} declaration={declaration}>
      <IconSelection />
    </Wrapper>
  );
}
