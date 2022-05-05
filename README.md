# Real Estate Paris House Price Prediction
![thumbnail paris](thumbnail.png)

Real estate paris house price prediction 2022 (Immobilier paris prix prediction)

Accuracy : 99.434095751513 %

```
MAE: 20390.9101285461
MSE: 1958656804.737834
RMSE: 44256.71479829738
```

#### Try online : [https://paris-house-price-prediction.herokuapp.com/](https://paris-house-price-prediction.herokuapp.com/)
#### Start server
```
uvicorn app.backend.api:app --host 0.0.0.0 --port 80 --reload
```
#### Docker
```
# build
docker build -t mymodel -f Dockerfile .

# run
docker run -p 80:80 mymodel
```

#### Screenshots
![](screenshot.PNG)
