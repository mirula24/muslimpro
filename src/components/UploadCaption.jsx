import React, { Component } from "react";
import axios from "axios";

class UploadCaption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teksArab: "",
      teksLatin: "",
      ayat: "",
      artinya: "",
      successMessage: "",
      errorMessage: "",
      totalCaption: 0,
    };
  }

  componentDidMount() {
    this.fetchTotalCaption();
  }

  fetchTotalCaption = async () => {
    try {
      const response = await axios.get("https://json-server-vercel-tawny-eight.vercel.app/api/caption");
      this.setState({ totalCaption: response.data.length });
    } catch (error) {
      console.error("Error fetching total caption:", error);
      this.setState({ errorMessage: "Error fetching total caption." });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { teksArab, teksLatin, ayat, artinya, totalCaption } = this.state;

    const newCaption = {
      id: `${totalCaption + 1}`, 
      teksArab,
      teksLatin,
      ayat,
      artinya,
    };

    try {
      await axios.post("https://json-server-vercel-tawny-eight.vercel.app/api/caption", newCaption);
      this.setState({
        teksArab: "",
        teksLatin: "",
        ayat: "",
        artinya: "",
        successMessage: "Caption uploaded successfully!",
        errorMessage: "",
        totalCaption: totalCaption + 1, 
      });
    } catch (error) {
      this.setState({
        successMessage: "",
        errorMessage: "Error uploading caption: " + error.message,
      });
    }
  };

  render() {
    const { teksArab, teksLatin, ayat, artinya, successMessage, errorMessage } =
      this.state;

    return (
      <div className="w-full flex flex-col min-h-screen items-center justify-center mt-5 text-white">
        <h1 className="text-2xl pt-10 font-bold">Upload Caption</h1>
        <div className="justify-between text-xl w-1/2 bg-black bg-opacity-20 px-4">
          <form onSubmit={this.handleSubmit} className="flex flex-col">
            <div className="justify-between flex flex-col">
              <label htmlFor="teksArap" className="p-2 ">Teks Arab / Caption:</label>
              <input
                id="teksArap"
                className="rounded-md p-2 text-black"
                type="text"
                name="teksArab"
                value={teksArab}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="justify-between flex flex-col">
              <label htmlFor="teksLatin" className="p-2">Teks Latin / Caption:</label>
              <input
                id="teksLatin"
                className="rounded-md p-2 text-black"
                type="text"
                name="teksLatin"
                value={teksLatin}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="justify-between flex flex-col">
              <label htmlFor="ayat" className="p-2">
                Ayat / Dalil :
              </label>
              <input
                className="rounded-md justify-center p-2 text-black"
                id="ayat"
                type="text"
                name="ayat"
                value={ayat}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="justify-between flex flex-col">
              <label htmlFor="artinya" className="p-2">
                Artinya / by :
              </label>
              <textarea
                id="artinya"
                className="p-2 rounded-md text-black"
                name="artinya"
                value={artinya}
                onChange={this.handleChange}
                required
              />
            </div>
            <button
              className="bg-customGreen hover:bg-customOrange p-5 m-5 rounded-md"
              type="submit"
            >
              Upload Caption
            </button>
          </form>
        </div>
        {successMessage && <p className="success">{successMessage}</p>}
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    );
  }
}

export default UploadCaption;
