// src/components/CurrencySwapForm.js
import React, { useState } from "react";
import { Select, InputNumber, Button, Row, Col, message, Card } from "antd";
import "./style.css";

const { Option } = Select;

const CurrencySwapForm = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencies = ["USD", "EUR", "GBP", "JPY"];

  const handleSwap = () => {
    // Tỷ giá hoán đổi giả định sẽ call api khi có
    const exchangeRates = {
      "USD-EUR": 0.85,
      "USD-GBP": 0.75,
      "USD-JPY": 110.57,
      "EUR-USD": 1.18,
      "EUR-GBP": 0.88,
      "EUR-JPY": 130.11,
      "GBP-USD": 1.33,
      "GBP-EUR": 1.14,
      "GBP-JPY": 148.22,
      "JPY-USD": 0.009,
      "JPY-EUR": 0.0077,
      "JPY-GBP": 0.0067,
    };

    const rateKey = `${fromCurrency}-${toCurrency}`;
    const rate = exchangeRates[rateKey];

    if (!rate) {
      message.error("Tỷ giá không hợp lệ");
      return;
    }

    const result = amount * rate;
    setConvertedAmount(result);
  };

  return (
    <Card
      title="Hoán đổi Tiền tệ"
      bordered={false}
      style={{ width: 400, margin: "0 auto" }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Select
            value={fromCurrency}
            onChange={setFromCurrency}
            style={{ width: "100%" }}
          >
            {currencies.map((currency) => (
              <Option key={currency} value={currency}>
                {currency}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={12}>
          <Select
            value={toCurrency}
            onChange={setToCurrency}
            style={{ width: "100%" }}
          >
            {currencies.map((currency) => (
              <Option key={currency} value={currency}>
                {currency}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <InputNumber
            min={1}
            value={amount}
            onChange={setAmount}
            style={{ width: "100%" }}
            placeholder="Nhập số tiền"
          />
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Button type="primary" onClick={handleSwap} style={{ width: "100%" }}>
            Hoán đổi
          </Button>
        </Col>
      </Row>

      {convertedAmount !== null && (
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={24}>
            <h3>
              {amount} {fromCurrency} = {convertedAmount.toFixed(2)}{" "}
              {toCurrency}
            </h3>
          </Col>
        </Row>
      )}
    </Card>
  );
};

export default CurrencySwapForm;
