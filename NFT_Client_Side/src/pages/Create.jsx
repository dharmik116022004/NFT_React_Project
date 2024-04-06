import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";
import img from "../assets/images/img-01.jpg";
import avatar from "../assets/images/ava-01.png";
import "../styles/create-item.css";

const Create = () => {
  const [formData, setFormData] = useState({
    image: null,
    price: "",
    minPrice: "",
    startingBidDate: "",
    expireBidDate: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", formData.image);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("minPrice", formData.minPrice);
      formDataToSend.append("startingBidDate", formData.startingBidDate);
      formDataToSend.append("expireBidDate", formData.expireBidDate);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);

      const response = await fetch("http://127.0.0.1:3000/api/data", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("NFT created successfully!");
        // Handle success as needed
        alert("NFT created successfully!");
      } else {
        console.error("Failed to create NFT.");
        // Handle failure as needed
      }
    } catch (error) {
      console.error("Error occurred while creating NFT:", error);
    }
  };

  const item = {
    id: "01",
    title: "Guard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img,
    creator: "Hitesh Bhakta",
    creatorImg: avatar,
    currentBid: 7.89,
  };

  return (
    <>
      <CommonSection title="Create Item" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={item} />
            </Col>
            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input
                      type="file"
                      className="upload__input"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Enter price for one item (ETH)"
                    />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input
                      type="number"
                      name="minPrice"
                      value={formData.minPrice}
                      onChange={handleChange}
                      placeholder="Enter minimum bid"
                    />
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input
                        type="date"
                        name="startingBidDate"
                        value={formData.startingBidDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input
                        type="date"
                        name="expireBidDate"
                        value={formData.expireBidDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter title"
                    />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="7"
                      placeholder="Enter description"
                      className="w-100"
                    ></textarea>
                  </div>
                  
                  <div className=" mt-3 d-flex align-items-center justify-content-between">
                    <button
                      className="bid__btn d-flex align-items-center gap-1" type="submit"
                    >Create NFT</button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
