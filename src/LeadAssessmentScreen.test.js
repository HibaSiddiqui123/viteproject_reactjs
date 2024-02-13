import { beforeEach, describe, expect, test } from 'vitest'
import { render, fireEvent, getByTestId, getAllByPlaceholderText } from '@testing-library/react';
import LeadAssessmentScreen from './LeadAssessmentScreen';

describe('LeadAssessmentScreen', () => {
  beforeEach(()=>{
    render(LeadAssessmentScreen);
  })
  test('make decision when city is not karachi',()=>{
        const { getByText, getByPlaceholderText } = render(<LeadAssessmentScreen />);

    fireEvent.change(getByPlaceholderText('city'), { target: { value: 'Lahore' } });

  })
  // test.only('should make a decision when all criteria are met', () => {
  //   const { getByPlaceholderText, getByText, getByLabelText } = render(<LeadAssessmentScreen />);
  //   console.log('iuy')
  //   fireEvent.change(getByPlaceholderText('City'), { target: { value: 'Karachi' } });
  //   fireEvent.change(getByPlaceholderText('Monthly Income'), { target: { value: '50000' } });
  //   fireEvent.change(getByPlaceholderText('Down Payment Amount'), { target: { value: '40000' } });
  //   fireEvent.change(getByPlaceholderText('Requested Loan Amount'), { target: { value: '200000' } });
  //   fireEvent.click(getByLabelText('All Documents Available'));
  //   fireEvent.click(getByText('Assess'));
  //   expect(getByText('Decision: WAIT_LIST')).toBeInTheDocument();
  // });
  // test('should make a decision when bankruptcy history is present', () => {
  //   const { getByText, getByLabelText } = render(<LeadAssessmentScreen />);
    
  //   fireEvent.click(getByLabelText('Bankruptcy History'));
  //   fireEvent.click(getByText('Assess'));
  //   expect(getByText('Decision: INELIGIBLE_PERMANENT')).toBeInTheDocument();
  // });
  // test('should make a decision when monthly income is below the lower limit', () => {
  //   const { getByText, getByPlaceholderText } = render(<LeadAssessmentScreen />);
    
  //   fireEvent.change(getByPlaceholderText('Monthly Income'), { target: { value: '20000' } });
  //   fireEvent.click(getByText('Assess'));
  //   expect(getByText('Decision: INELIGIBLE_TEMPORARY')).toBeInTheDocument();
  // });
  // test('should make a decision when monthly income is above the upper limit', () => {
  //   const { getByText, getByPlaceholderText } = render(<LeadAssessmentScreen />);
    
  //   fireEvent.change(getByPlaceholderText('Monthly Income'), { target: { value: '200000' } });
  //   fireEvent.click(getByText('Assess'));
  //   expect(getByText('Decision: INELIGIBLE_TEMPORARY')).toBeInTheDocument();
  // });
  // test('should make a decision when loan amount is below the lower limit', () => {
  //   const { getByText, getByPlaceholderText } = render(<LeadAssessmentScreen />);
    
  //   fireEvent.change(getByPlaceholderText('Requested Loan Amount'), { target: { value: '50000' } });
  //   fireEvent.click(getByText('Assess'));
  //   expect(getByText('Decision: INELIGIBLE_TEMPORARY')).toBeInTheDocument();
  // });
  // test('should make a decision when loan amount is above the upper limit', () => {
  //   const { getByText, getByPlaceholderText } = render(<LeadAssessmentScreen />);
    
  //   fireEvent.change(getByPlaceholderText('Requested Loan Amount'), { target: { value: '4000000' } });
  //   fireEvent.click(getByText('Assess'));
  //   expect(getByText('Decision: INELIGIBLE_TEMPORARY')).toBeInTheDocument();
  // });
  // test('should make a decision when down payment percentage is below the lower limit', () => {
  //   const { getByText, getByPlaceholderText } = render(<LeadAssessmentScreen />);
    
  //   fireEvent.change(getByPlaceholderText('Down Payment Amount'), { target: { value: '10000' } });
  //   fireEvent.click(getByText('Assess'));
  //   expect(getByText('Decision: INELIGIBLE_TEMPORARY')).toBeInTheDocument();
  // });
  // test('should make a decision when down payment percentage is above the upper limit', () => {
  //   const { getByText, getByPlaceholderText } = render(<LeadAssessmentScreen />);
    
  //   fireEvent.change(getByPlaceholderText('Down Payment Amount'), { target: { value: '300000' } });
  //   fireEvent.click(getByText('Assess'));
  //   expect(getByText('Decision: INELIGIBLE_TEMPORARY')).toBeInTheDocument();
  // });
  // test('should make a decision when documents are not available', () => {
  //   const { getByText, getByLabelText } = render(<LeadAssessmentScreen />);
    
  //   fireEvent.click(getByLabelText('All Documents Available'));
  //   fireEvent.click(getByText('Assess'));
  //   expect(getByText('Decision: WAIT_LIST_MORE_PROPERTY_DOCS')).toBeInTheDocument();
  // });
  // test('should make a decision when city is not Karachi', () => {
  //   const { getByText, getByPlaceholderText } = render(<LeadAssessmentScreen />);
  //   console.log('out')
  //   fireEvent.change(getByTestId('city'), { target: { value: 'Lahore' } });
  //   fireEvent.click(getByTestId('Assess'));
  //   // expect(getByText('Decision: WAIT_LIST_FUTURE_CITY')).toBeInTheDocument();
  //  });
});