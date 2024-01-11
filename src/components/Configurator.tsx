import { chairColors, cushionColors } from '../assets/colors';
import { useCustomize } from '../hooks/use-customize';

const Configurator = () => {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    chairColor,
    setChairColor,
    cushionColor,
    setCushionColor,
  } = useCustomize();
  console.log(material);

  return (
    <div className="configurator">
      <div className="configurator__section__title">Chair Material</div>
      <div className="configurator__section__values">
        <div
          className={`item ${
            material === 'leather' ? 'item--active' : 'item--notactive'
          }`}
          onClick={() => setMaterial('leather')}
        >
          <div className="item__label">Leather</div>
        </div>
        <div
          className={`item ${
            material === 'fabric' ? 'item--active' : 'item--notactive'
          }`}
          onClick={() => setMaterial('fabric')}
        >
          <div className="item__label">Fabric</div>
        </div>
      </div>

      {/* second row */}

      <div className="configurator__section__title">Legs Customization</div>
      <div className="configurator__section__values">
        <div
          className={`item ${legs === 1 ? 'item--active' : 'item--notactive'}`}
          onClick={() => setLegs(1)}
        >
          <div className="item__label">Design</div>
        </div>
        <div
          className={`item ${legs === 2 ? 'item--active' : 'item--notactive'}`}
          onClick={() => setLegs(2)}
        >
          <div className="item__label">Classic</div>
        </div>
      </div>

      {/* third row */}
      <div className="configurator__section__title">Chair Color</div>
      <div className="configurator__section__values">
        {chairColors.map((item, index) => (
          <div
            key={index}
            className={`item ${
              item.color === chairColor.color
                ? 'item--active'
                : 'item--notactive'
            }`}
            onClick={() => setChairColor(item)}
          >
            <div
              className="item__dot"
              style={{
                backgroundColor: item.color,
              }}
            />
            <div className="item__label">{item.name}</div>
          </div>
        ))}
      </div>

      {/* fourth row */}
      <div className="configurator__section__title">Cushion Color</div>
      <div className="configurator__section__values">
        {cushionColors.map((item, index) => (
          <div
            key={index}
            className={`item ${
              item.color === cushionColor.color
                ? 'item--active'
                : 'item--notactive'
            }`}
            onClick={() => setCushionColor(item)}
          >
            <div
              className="item__dot"
              style={{
                backgroundColor: item.color,
              }}
            />
            <div className="item__label">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Configurator;
