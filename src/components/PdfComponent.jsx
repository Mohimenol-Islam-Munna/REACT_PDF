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
          Voluptate laboriosam, blanditiis rem quas voluptas vitae soluta! Animi
          voluptate ab quod aliquam, consequatur inventore dolorum suscipit
          autem eveniet cupiditate repellendus est quo placeat. Illum dolor
          assumenda repellat consequatur! A, quo adipisci magnam laboriosam
          velit delectus cumque vero. Molestias quibusdam harum excepturi
          quisquam omnis a id sequi similique delectus consequatur itaque
          perferendis aliquid, magni adipisci! Suscipit, dolore? Alias sequi
          suscipit id a blanditiis, dolores doloribus, sit, saepe ea eos
          repellat nobis tenetur fugit? Cupiditate quidem cum magnam
          perspiciatis minima, hic eaque, id modi, officia alias quaerat libero
          repellat. Veniam eius accusantium architecto aliquam repellendus
          excepturi quidem pariatur, quos modi, veritatis molestiae, ullam
          suscipit adipisci praesentium? Ex at voluptate ratione alias,
          molestiae beatae est soluta nemo aliquam quasi perferendis corrupti
          distinctio aliquid explicabo aperiam recusandae, expedita magnam autem
          commodi sunt omnis dolores laborum! Ipsam magni inventore architecto
          quidem cum, sed ullam dolor similique et tempore sint illo corrupti
          praesentium, repudiandae porro, vitae excepturi quisquam. Quos,
          veritatis! Facere, minus reiciendis earum perspiciatis ratione
          inventore porro ut officia est omnis doloremque similique nemo magni
          aspernatur quod praesentium, vitae, modi ipsa ipsum? Dolor provident
          vel tenetur explicabo rerum sint, dolorum harum impedit reiciendis
          ipsa temporibus corporis officiis pariatur, maiores reprehenderit
          deserunt magnam incidunt! Debitis earum, minus adipisci eligendi esse
          voluptatibus labore dolores quidem facere itaque iure provident quas
          atque reiciendis odio optio hic cupiditate repellat assumenda nam
          voluptatem doloremque commodi nihil. Sint alias, aliquid
          necessitatibus commodi iste expedita voluptas reprehenderit fuga
          eveniet vitae ipsa explicabo quidem impedit perferendis quis ut!
          Magnam accusamus sint dignissimos, fuga consequuntur eveniet quaerat
          facere quod inventore praesentium recusandae quasi, dolor accusantium
          eligendi et voluptatibus aspernatur ipsum commodi hic fugiat optio.
          Voluptas quasi neque tempora. Molestias explicabo numquam asperiores
          praesentium, minima nam a enim. Harum reprehenderit eius at pariatur
          eveniet aspernatur aperiam ex vero rem consequatur veritatis eligendi
          architecto quo illo hic quisquam id, saepe adipisci iste? Rerum, ex
          blanditiis facere ab dicta quos quibusdam officiis. Totam nobis
          excepturi, enim voluptatum ipsa nihil. Necessitatibus, harum. Iure
          iste doloremque libero enim eligendi dignissimos ipsam veniam est in
          error necessitatibus ab obcaecati quos voluptate voluptas tempora,
          illum incidunt id reiciendis voluptatem blanditiis! Quia optio laborum
          nulla aperiam molestias dolor nesciunt sapiente sunt delectus totam
          dolore atque error, deserunt nihil culpa est sit beatae minus, fugiat
          eaque eum dolores? Tenetur laborum, laboriosam quasi fugit velit,
          labore maiores consequatur quod corrupti pariatur obcaecati temporibus
          mollitia et doloribus eos esse repudiandae, repellat nostrum culpa.
          Placeat, deserunt obcaecati. Fuga placeat eligendi voluptate dolorum
          enim ab aut alias soluta odio. Ipsa fugit laborum autem mollitia
          corporis, illo dolor vero atque alias quis delectus quod iusto
          assumenda eligendi accusantium nostrum provident reprehenderit error
          earum. Temporibus vero tempora aliquid quam facere numquam quod ipsam
          ea molestias odit, ad dolore aut totam corporis culpa! Delectus cumque
          pariatur magnam hic, placeat unde dicta consectetur, odio totam velit
          nesciunt. Quas soluta quibusdam recusandae reprehenderit labore? Quis
          deserunt, fugiat odit facilis facere, asperiores repudiandae ipsam sed
          harum architecto sapiente, libero sit ab neque sunt doloribus tempora
          hic atque! Perferendis qui ad quas non officiis illo accusantium
          aliquid? Alias iusto suscipit libero amet quos ipsam, est tempore
          animi exercitationem magni cum, harum maxime officiis velit pariatur
          voluptate nihil, sapiente deleniti dignissimos officia quasi? Quis
          aperiam incidunt blanditiis sunt, magni harum quod perferendis
          temporibus qui dolorem modi corporis sapiente ipsum quibusdam deleniti
          porro eaque debitis ex odit eveniet. Vel laudantium sint fugit
          doloribus voluptatum voluptatem eaque molestias quod placeat natus
          debitis corrupti dignissimos, odio esse nemo voluptas alias
          accusantium sunt nulla! Natus vitae autem, asperiores perferendis,
          repudiandae, aut aliquid voluptas facilis odit labore animi. Ipsum
          asperiores dolore ut nisi facere libero mollitia animi ipsam laborum
          sunt placeat odit, explicabo voluptate optio saepe, voluptatum
          consequatur vitae atque quidem autem enim. Autem, hic! Labore, eum
          enim. Eius adipisci recusandae animi, esse totam corrupti
          perspiciatis, voluptas quia nostrum nisi necessitatibus hic nam modi
          omnis ipsum harum. Fugiat expedita iure laboriosam ipsa deserunt,
          nihil dignissimos non cum sunt mollitia recusandae corporis ratione
          natus a facilis, itaque eius aspernatur tempora, illum voluptates est!
          Consequuntur quisquam inventore sit, expedita asperiores vitae, facere
          quod, totam alias iusto debitis! Ipsa in iure ipsam, officiis nobis
          architecto mollitia hic molestias deserunt at quidem necessitatibus
          ipsum! Repellendus incidunt nihil sunt accusantium, voluptates quos
          ipsam tempore neque iste error mollitia sequi, sit corrupti vitae
          eligendi ducimus nesciunt, amet quod atque quia porro minus placeat?
          Aperiam, magnam unde dicta ad tempora voluptatibus quaerat odit enim
          est nisi voluptas dolore eos dolor ullam voluptates officia ex quia,
          aliquid consequuntur consectetur velit! Laudantium, minima? Suscipit,
          dignissimos aspernatur expedita aut soluta necessitatibus earum nemo
          quasi odio, sequi facilis ea commodi ex amet voluptatem! Quis dicta
          sunt dolorem provident quo a alias ipsam repellat velit doloribus iste
          id, sed officiis ipsa officia ut ad doloremque. Earum, est quisquam?
          Perferendis qui, natus assumenda repudiandae labore facilis eligendi
          autem quo, quisquam, sit eius esse enim modi aut. Est sequi
          repellendus incidunt tempora fuga ipsum cumque, voluptatem alias saepe
          error delectus nostrum similique ipsam esse necessitatibus, cupiditate
          fugiat perspiciatis ad! Quod quidem inventore, culpa consequatur,
          atque architecto dignissimos, assumenda amet alias quos soluta. Ad
          amet rem consequatur quaerat velit et exercitationem error mollitia
          temporibus dolorem eos voluptatum quo maxime corporis illum
          dignissimos adipisci, praesentium nesciunt doloremque doloribus?
          Similique in officia eveniet cum tempore, ipsum molestias dolorum
          facere accusantium a omnis quos dolores et eum recusandae voluptas
          exercitationem aspernatur quia veniam quaerat consequatur explicabo
          quis? Quidem excepturi ipsum tenetur eligendi et fugit error tempore,
          in quasi molestias esse illum rem facere ullam nisi recusandae itaque
          similique officia, alias voluptatem libero facilis optio dolor? Id
          laboriosam ipsum, placeat consequatur asperiores cumque repellendus
          voluptas nisi explicabo rerum commodi accusantium quidem? Iure
          repudiandae et laboriosam enim quam ipsum odio aspernatur voluptate
          repellendus aut! Sapiente culpa aperiam, pariatur illo omnis quis a
          provident quod doloribus, animi corrupti. Ullam commodi voluptatem
          fuga suscipit? Consequatur repudiandae veritatis adipisci, quo beatae
          neque saepe quaerat labore, rem, fugiat doloremque.
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
    </div>
  );
};

export default PdfComponent;
