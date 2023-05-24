/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import fetchData from '../services/fetchData'

describe('fetchData', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, name: 'Data 1' }, { id: 2, name: 'Data 2' }])
      })
    );
  });

  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  it('should fetch data successfully and update state', async () => {
    const dataName = 'example';
    const startDate = new Date('2022-01-01');
    const endDate = new Date('2022-01-31');
    const setData = jest.fn();
    const setServerFail = jest.fn();

    await fetchData({ dataName, startDate, endDate, setData, setServerFail });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/environment/${dataName}?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
    );

    expect(setData).toHaveBeenCalledTimes(1);
    expect(setData).toHaveBeenCalledWith([{ id: 1, name: 'Data 1' }, { id: 2, name: 'Data 2' }]);
  });

  it('should handle server error and set empty data', async () => {
    const dataName = 'example';
    const startDate = new Date('2022-01-01');
    const endDate = new Date('2022-01-31');
    const setData = jest.fn();
    const setServerFail = jest.fn();


    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({error: 'Server error'}) 
      })
    );

    await fetchData({dataName, startDate, endDate, setData, setServerFail});

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/environment/${dataName}?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
    );

    expect(setData).toHaveBeenCalledTimes(1);
    expect(setData).toHaveBeenCalledWith([]);
    expect(setServerFail).toHaveBeenCalledTimes(1);
    expect(setServerFail).toHaveBeenCalledWith(true);
  });

  it('should fetch data successfully without startDate and endDate', async () => {
    const dataName = 'example';
    const setData = jest.fn();
    const setServerFail = jest.fn();

    await fetchData({ dataName, setData, setServerFail });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/environment/${dataName}`
    );

    expect(setData).toHaveBeenCalledTimes(1);
    expect(setData).toHaveBeenCalledWith([{ id: 1, name: 'Data 1' }, { id: 2, name: 'Data 2' }]);
    expect(setServerFail).toHaveBeenCalledTimes(0);
  });
});