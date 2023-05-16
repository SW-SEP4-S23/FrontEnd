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

    await fetchData(dataName, startDate, endDate, setData);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/${dataName}?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
    );

    expect(setData).toHaveBeenCalledTimes(1);
    expect(setData).toHaveBeenCalledWith([{ id: 1, name: 'Data 1' }, { id: 2, name: 'Data 2' }]);
  });

  it('should handle server error and set empty data', async () => {
    const dataName = 'example';
    const startDate = new Date('2022-01-01');
    const endDate = new Date('2022-01-31');
    const setData = jest.fn();

    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({error: 'Server error'}) 
      })
    );

    global.alert = jest.fn();

    await fetchData(dataName, startDate, endDate, setData);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/${dataName}?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
    );

    expect(global.alert).toHaveBeenCalledTimes(1);
    expect(setData).toHaveBeenCalledTimes(1);
    expect(setData).toHaveBeenCalledWith([]);
  });

  it('should not fetch data if start date or end date is undefined', async () => {
    const dataName = 'example';
    const startDate = undefined;
    const endDate = new Date('2022-01-31');
    const setData = jest.fn();

    await fetchData(dataName, startDate, endDate, setData);

    expect(global.fetch).not.toHaveBeenCalled();
    expect(setData).not.toHaveBeenCalled();
  });
});