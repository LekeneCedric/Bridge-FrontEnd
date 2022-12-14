# Bridge-FrontEnd

mobile application allowing users to make donations via the platform (food donations, clothing, etc.) and allowing associations to present their difficulties to the general public

## Installation 

Use the package manager [npm](https://www.npmjs.com/) to install all dependancies 
```
npm install
```
If you have dependancy issues 

```
npm install --legacy-peer-deps
```
## Usage 

At the [/environments/environment.ts]() set this environment parameters

```
 apiURL:'http://192.168.8.102:8000/api',
 storage :'http://192.168.8.102:8000/storage/',
 map:'AIzaSyAioYBvV5rpt9NIAAhyN4ZcxxbLamS052E'

```

## Run

### In local

```
ionic serve 
```
### External 

```
ionic serve --external
```
then you can access to the web app by [local_ip_adress:8100]()
