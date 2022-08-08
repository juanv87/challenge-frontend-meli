const axios = require("axios");

const apiUrlMeli = "https://api.mercadolibre.com";

const getItemsById = (req, res) => {
  const id = req.params.id;
  // console.log("id", id);

  axios
    .get(`${apiUrlMeli}/items/${id}`)
    .then((product) => {
      axios
        .get(`${apiUrlMeli}/items/${id}/description`)
        .catch((err) => {
          console.log(err);
        })
        .then((productDesc) => {
          const descriptionProduct = productDesc
            ? productDesc.data.plain_text
            : "Producto sin descripción";

          const result = product.data;

          if (result.id) {
            let productDetail = {
              author: {
                name: "",
                lastname: "",
              },
              item: {
                id: result.id,
                title: result.title,
                price: {
                  currency: result.currency_id,
                  amount: result.price,
                  decimals: result.decimals,
                },
                picture: result.pictures[0].url,
                condition: result.condition,
                free_shipping: result.shipping.free_shipping,
                sold_quantity: result.sold_quantity,
                description: descriptionProduct,
              },
            };
            res.status(200).send(productDetail);
          }
        });
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

const getItems = (req, res) => {
  const query = req.query.q;
  const regex = /-I./;
  axios
    .get(`${apiUrlMeli}/sites/MLA/search?q=${query}&limit=4`)
    .then((product) => {
      const result = product.data.results;
      if (result.length > 0) {
        let products = result.map((product) => {
          // console.log(product);
          return {
            id: product.id,
            title: product.title,
            price: {
              currency: product.currency_id,
              amount: product.price,
              decimals: product.decimals,
            },
            picture: product.thumbnail.replace(regex, "-O."),
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            city: product.address.city_name,
          };
        });
        categoryId = result.map((item) => item.category_id);
        categoryUnique = [...new Set(categoryId)];
        //console.log("categoryUnique", categoryUnique);
        axios
          .get(`${apiUrlMeli}/categories/${categoryUnique}`)
          .catch((err) => {
            console.log(err);
          })
          .then((category) => {
            const categories = category
              ? category.data.path_from_root.map((item) => item.name)
              : [];
            let resultQuery = {
              author: {},
              categories,
              items: products,
            };

            res.status(200).send(resultQuery);
          });
      } else {
        throw "Product not found.";
      }
    })
    .catch((err) => {
      res.status(404).send(err);
      console.warn(err);
    });
};

module.exports = { getItems, getItemsById };
