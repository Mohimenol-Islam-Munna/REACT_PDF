import React, { useState } from "react";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  usePDF,
  PDFViewer,
  BlobProvider,
  PDFDownloadLink
} from "@react-pdf/renderer";

import PSPDFKit from "pspdfkit";

// Create styles
const styles = StyleSheet.create({
  page: {
    boxSizing: "border-box",
    padding: "20px 20px 80px",
    position: "relative",
  },

  header: {
    width: "100%",
    padding: "10px",
    backgroundColor: "gray",
    boxSizing: "border-box",
  },

  footer: {
    width: "100%",
    padding: "10px",
    backgroundColor: "gray",
    boxSizing: "border-box",
    position: "absolute",
    bottom: "20px",
    left: "20px",
  },

  content: {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px",
    backgroundColor: "lightgray",
  },
});

const PdfDoc = ({ children }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View fixed style={styles.header}>
          <Text>
            Header Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam iusto similique rerum libero sunt voluptate et alias.
          </Text>
        </View>
        <View wrap={true} style={styles.content}>
          {children}
        </View>
        <View fixed style={styles.footer}>
          <Text>
            Footer Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam iusto similique rerum libero sunt voluptate et alias.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

const PdfComponent = () => {
  const [state, setState] = useState("dynamic data");

  const [productList, setProductList] = useState([
    { id: 1, name: "shirt", qty: 5, price: 100, total: 500 },
  ]);

  const [tableHeader, setTableHeader] = useState([
    "No",
    "Name",
    "Qty",
    "Price",
    "Total",
  ]);

  const [instance, updateInstance] = usePDF({
    document: (
      <PdfDoc>
        <Text>
          children text Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Harum pariatur quis id saepe. Temporibus explicabo eaque praesentium
          sint dicta rerum reprehenderit voluptates veritatis accusantium.
        </Text>
      </PdfDoc>
    ),
  });

  const handlePrint = () => {
    const dataUrl = URL.createObjectURL(instance.blob);
    const myWindow = window.open(dataUrl);
    myWindow.print();
  };

  return (
    <div>
      <PDFViewer width={"100%"} height="600px">
        <PdfDoc>
          <Text style={{ textAlign: "center" }}>Titile</Text>
          <View style={{ margin: "20px 0px" }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              {tableHeader.map((item, index) => {
                return (
                  <View
                    style={{
                      flexGrow: 1,
                      width: `${100 / tableHeader.length}%`,
                      fontSize: "12px",
                      padding: "10px",
                      backgroundColor: "palegreen",
                      border: "1px solid black",
                    }}
                  >
                    <Text>{item}</Text>
                  </View>
                );
              })}
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {productList.map((item, index) => {
                return (
                  <>
                    <View
                      style={{
                        flexGrow: 1,
                        width: `${100 / tableHeader.length}%`,

                        padding: "10px",
                        border: "1px solid black",
                      }}
                    >
                      <Text>{item.id}</Text>
                    </View>
                    <View
                      style={{
                        flexGrow: 1,
                        width: `${100 / tableHeader.length}%`,

                        padding: "10px",
                        border: "1px solid black",
                      }}
                    >
                      <Text>{item.name}</Text>
                    </View>
                    <View
                      style={{
                        flexGrow: 1,
                        width: `${100 / tableHeader.length}%`,

                        padding: "10px",
                        border: "1px solid black",
                      }}
                    >
                      <Text>{item.qty}</Text>
                    </View>
                    <View
                      style={{
                        flexGrow: 1,
                        width: `${100 / tableHeader.length}%`,

                        padding: "10px",
                        border: "1px solid black",
                      }}
                    >
                      <Text>{item.price}</Text>
                    </View>
                    <View
                      style={{
                        flexGrow: 1,
                        width: `${100 / tableHeader.length}%`,

                        padding: "10px",
                        border: "1px solid black",
                      }}
                    >
                      <Text>{item.total}</Text>
                    </View>
                  </>
                );
              })}
            </View>
          </View>
        </PdfDoc>
      </PDFViewer>

      <button
        onClick={() => {
          handlePrint();
        }}
      >
        Print koro
      </button>

      <PDFDownloadLink document={<PdfDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PdfComponent;
