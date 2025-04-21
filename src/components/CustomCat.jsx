import { CirclePicker } from 'react-color'


export function CustomCat({  
    saveText,
    setSaveText,
    setCustomText,
    setRefreshImage,
    fontSize,
    setFontSize,
    color,
    setColor,
    customColors,
    showPicker }) {
    return (
        <section className="col-lg-6">
        <div >
          <h2 className="mb-4">Personalized phrase</h2>
          <div className="custom-text">          
            <h3>Write your sentence</h3>
            <input
              type="text"
              placeholder=" "
              value={saveText}
              onChange={(e) => setSaveText(e.target.value)}
            /> 
          </div>
          <div className="custom-text">
            <h3>Font size</h3>
            <input
              type="number"
              placeholder="Select font size"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h3>Font color</h3>
          {showPicker && (
            <CirclePicker
              colors={customColors}
              color={color}
              onChangeComplete={(color) => {
                setColor(color.hex)
              }}
            />
          )}
        </div>
        <button
            onClick={() => {
              setCustomText(saveText);
              setRefreshImage((prev) => !prev);
            }}
            className="my-button"
            style={{ marginTop: "3rem" }}>
            Personalized phrase
        </button>
      </section>
    );
  }