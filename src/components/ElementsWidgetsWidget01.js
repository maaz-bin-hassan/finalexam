import { useMemo } from "react";
import "./ElementsWidgetsWidget01.css";

const ElementsWidgetsWidget01 = ({
  elementsButtonsIcon32px,
  elementsWidgetsWidget01Width,
  elementsWidgetsWidget01Height,
  elementsWidgetsWidget01Position,
  elementsWidgetsWidget01Top,
  elementsWidgetsWidget01Right,
  elementsWidgetsWidget01Bottom,
  elementsWidgetsWidget01Left,
  baseBackgroundColor,
  baseBackground,
  activTop,
  activLeft,
  activWidth,
  activHeight,
  recTop,
  recLeft,
  recBackgroundColor,
  recHeight,
  recTop1,
  recLeft1,
  recBackgroundColor1,
  recHeight1,
  recTop2,
  recLeft2,
  recBackgroundColor2,
  recHeight2,
  recTop3,
  recLeft3,
  recBackgroundColor3,
  recHeight3,
  recTop4,
  recLeft4,
  recBackgroundColor4,
  recHeight4,
  recTop5,
  recLeft5,
  recBackgroundColor5,
  recHeight5,
  recTop6,
  recLeft6,
  recBackgroundColor6,
  recHeight6,
  recTop7,
  recLeft7,
  recBackgroundColor7,
  recHeight7,
  recTop8,
  recLeft8,
  recBackgroundColor8,
  recHeight8,
  recTop9,
  recLeft9,
  recBackgroundColor9,
  recHeight9,
  elementsButtonsIcon32Top,
  elementsButtonsIcon32Right,
  elementsButtonsIcon32Width,
  elementsButtonsIcon32Height,
  checkOutEachWidth,
  checkOutEachLeft,
  totalSalesTop,
  totalSalesLeft,
}) => {
  const elementsWidgetsWidget01Style = useMemo(() => {
    return {
      width: elementsWidgetsWidget01Width,
      height: elementsWidgetsWidget01Height,
      position: elementsWidgetsWidget01Position,
      top: elementsWidgetsWidget01Top,
      right: elementsWidgetsWidget01Right,
      bottom: elementsWidgetsWidget01Bottom,
      left: elementsWidgetsWidget01Left,
    };
  }, [
    elementsWidgetsWidget01Width,
    elementsWidgetsWidget01Height,
    elementsWidgetsWidget01Position,
    elementsWidgetsWidget01Top,
    elementsWidgetsWidget01Right,
    elementsWidgetsWidget01Bottom,
    elementsWidgetsWidget01Left,
  ]);

  const base3Style = useMemo(() => {
    return {
      backgroundColor: baseBackgroundColor,
      background: baseBackground,
    };
  }, [baseBackgroundColor, baseBackground]);

  const activStyle = useMemo(() => {
    return {
      top: activTop,
      left: activLeft,
      width: activWidth,
      height: activHeight,
    };
  }, [activTop, activLeft, activWidth, activHeight]);

  const recStyle = useMemo(() => {
    return {
      top: recTop,
      left: recLeft,
      backgroundColor: recBackgroundColor,
      height: recHeight,
    };
  }, [recTop, recLeft, recBackgroundColor, recHeight]);

  const rec1Style = useMemo(() => {
    return {
      top: recTop1,
      left: recLeft1,
      backgroundColor: recBackgroundColor1,
      height: recHeight1,
    };
  }, [recTop1, recLeft1, recBackgroundColor1, recHeight1]);

  const rec2Style = useMemo(() => {
    return {
      top: recTop2,
      left: recLeft2,
      backgroundColor: recBackgroundColor2,
      height: recHeight2,
    };
  }, [recTop2, recLeft2, recBackgroundColor2, recHeight2]);

  const rec3Style = useMemo(() => {
    return {
      top: recTop3,
      left: recLeft3,
      backgroundColor: recBackgroundColor3,
      height: recHeight3,
    };
  }, [recTop3, recLeft3, recBackgroundColor3, recHeight3]);

  const rec4Style = useMemo(() => {
    return {
      top: recTop4,
      left: recLeft4,
      backgroundColor: recBackgroundColor4,
      height: recHeight4,
    };
  }, [recTop4, recLeft4, recBackgroundColor4, recHeight4]);

  const rec5Style = useMemo(() => {
    return {
      top: recTop5,
      left: recLeft5,
      backgroundColor: recBackgroundColor5,
      height: recHeight5,
    };
  }, [recTop5, recLeft5, recBackgroundColor5, recHeight5]);

  const rec6Style = useMemo(() => {
    return {
      top: recTop6,
      left: recLeft6,
      backgroundColor: recBackgroundColor6,
      height: recHeight6,
    };
  }, [recTop6, recLeft6, recBackgroundColor6, recHeight6]);

  const rec7Style = useMemo(() => {
    return {
      top: recTop7,
      left: recLeft7,
      backgroundColor: recBackgroundColor7,
      height: recHeight7,
    };
  }, [recTop7, recLeft7, recBackgroundColor7, recHeight7]);

  const rec8Style = useMemo(() => {
    return {
      top: recTop8,
      left: recLeft8,
      backgroundColor: recBackgroundColor8,
      height: recHeight8,
    };
  }, [recTop8, recLeft8, recBackgroundColor8, recHeight8]);

  const rec9Style = useMemo(() => {
    return {
      top: recTop9,
      left: recLeft9,
      backgroundColor: recBackgroundColor9,
      height: recHeight9,
    };
  }, [recTop9, recLeft9, recBackgroundColor9, recHeight9]);

  const elementsButtonsIcon321Style = useMemo(() => {
    return {
      top: elementsButtonsIcon32Top,
      right: elementsButtonsIcon32Right,
      width: elementsButtonsIcon32Width,
      height: elementsButtonsIcon32Height,
    };
  }, [
    elementsButtonsIcon32Top,
    elementsButtonsIcon32Right,
    elementsButtonsIcon32Width,
    elementsButtonsIcon32Height,
  ]);

  const checkOutEach1Style = useMemo(() => {
    return {
      width: checkOutEachWidth,
      left: checkOutEachLeft,
    };
  }, [checkOutEachWidth, checkOutEachLeft]);

  const totalSales1Style = useMemo(() => {
    return {
      top: totalSalesTop,
      left: totalSalesLeft,
    };
  }, [totalSalesTop, totalSalesLeft]);

  return (
    <div
      className="elements-widgets-widget-01"
      style={elementsWidgetsWidget01Style}
    >
      <div className="widget2">
        <div className="base6" style={base3Style} />
        <div className="activ" style={activStyle}>
          <div className="rec" style={recStyle} />
          <div className="rec1" style={rec1Style} />
          <div className="rec2" style={rec2Style} />
          <div className="rec3" style={rec3Style} />
          <div className="rec4" style={rec4Style} />
          <div className="rec5" style={rec5Style} />
          <div className="rec6" style={rec6Style} />
          <div className="rec7" style={rec7Style} />
          <div className="rec8" style={rec8Style} />
          <div className="rec9" style={rec9Style} />
        </div>
        <img
          className="elements-buttons-icon-322"
          alt=""
          src={elementsButtonsIcon32px}
          style={elementsButtonsIcon321Style}
        />
        <div className="check-out-each1" style={checkOutEach1Style}>
          Check out each collumn for more details
        </div>
        <div className="total-sales1" style={totalSales1Style}>
          Total Sales
        </div>
      </div>
    </div>
  );
};

export default ElementsWidgetsWidget01;
