
import { assign } from 'lodash'
import React from 'react'
import { expect } from 'chai'
import sd from 'skin-deep'
import TestUtils from 'react-addons-test-utils'
import { Flex } from '../src'

describe('Flex', () => {
  let dom, instance, style, computed

  const initial = {
    display: 'flex',
    flexWrap: null,
    flexDirection: null,
    flex: null,
    alignItems: null,
    justifyContent: null,
    marginLeft: null,
    marginRight: null,
  }

  beforeEach(() => {
    const tree = sd.shallowRender(<Flex />)
    instance = tree.getMountedInstance()
    dom = tree.getRenderOutput()
    style = dom.props.style
  })

  it('should render', () => {
    expect(instance).to.exist
  })

  it('should have no styles by default', () => {
    expect(style).to.deep.equal(initial)
  })

  context('when setting style prop', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex style={{ backgroundColor: 'tomato' }} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should assign styles', () => {
      expect(style).to.deep.equal(assign({ backgroundColor: 'tomato' }, initial))
    })
  })

  context('when setting className prop', () => {
    let className
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex className='Flex--custom' />)
      dom = tree.getRenderOutput()
      className = dom.props.className
    })

    it('should add a class', () => {
      expect(className).to.equal('Flex Flex--custom')
    })
  })

  context('when no className is set', () => {
    let className
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex />)
      dom = tree.getRenderOutput()
      className = dom.props.className
    })

    it('should not add a class', () => {
      expect(className).to.equal('Flex')
    })
  })

  context('when wrap prop is true', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex wrap />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set flex-wrap wrap', () => {
      computed = assign({}, initial, { flexWrap: 'wrap' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when column prop is true', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex column />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set flex-direction column', () => {
      computed = assign({}, initial, { flexDirection: 'column' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when align prop is set to stretch', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex align='stretch' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set align-items stretch', () => {
      computed = assign({}, initial, { alignItems: 'stretch' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when align prop is set to center', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex align='center' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set align-items center', () => {
      computed = assign({}, initial, { alignItems: 'center' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when align prop is set to baseline', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex align='baseline' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set align-items baseline', () => {
      computed = assign({}, initial, { alignItems: 'baseline' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when align prop is set to flex-start', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex align='flex-start' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set align-items baseline', () => {
      computed = assign({}, initial, { alignItems: 'flex-start' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when align prop is set to flex-end', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex align='flex-end' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set align-items baseline', () => {
      computed = assign({}, initial, { alignItems: 'flex-end' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when justify prop is set to center', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex justify='center' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set justify-content center', () => {
      computed = assign({}, initial, { justifyContent: 'center' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when justify prop is set to space-around', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex justify='space-around' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set justify-content space-around', () => {
      computed = assign({}, initial, { justifyContent: 'space-around' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when justify prop is set to space-between', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex justify='space-between' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set justify-content space-between', () => {
      computed = assign({}, initial, { justifyContent: 'space-between' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when justify prop is set to flex-start', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex justify='flex-start' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set justify-content flex-start', () => {
      computed = assign({}, initial, { justifyContent: 'flex-start' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when justify prop is set to flex-end', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex justify='flex-end' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set justify-content flex-end', () => {
      computed = assign({}, initial, { justifyContent: 'flex-end' })
      expect(style).to.deep.equal(computed)
    })
  })

  describe('gutter prop', () => {
    context('when set to 1', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Flex gutter={1} />)
        style = tree.getRenderOutput().props.style
      })

      it('should set margin left and margin right -8', () => {
        computed = assign({}, initial, {
          marginLeft: -8,
          marginRight: -8
        })
        expect(style).to.deep.equal(computed)
      })
    })
    context('when set to 2', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Flex gutter={2} />)
        style = tree.getRenderOutput().props.style
      })

      it('should set margin left and margin right -16', () => {
        computed = assign({}, initial, {
          marginLeft: -16,
          marginRight: -16
        })
        expect(style).to.deep.equal(computed)
      })
    })
    context('when set to 3', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Flex gutter={3} />)
        style = tree.getRenderOutput().props.style
      })

      it('should set margin left and margin right -32', () => {
        computed = assign({}, initial, {
          marginLeft: -32,
          marginRight: -32
        })
        expect(style).to.deep.equal(computed)
      })
    })
    context('when set to 4', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Flex gutter={4} />)
        style = tree.getRenderOutput().props.style
      })

      it('should set margin left and margin right -64', () => {
        computed = assign({}, initial, {
          marginLeft: -64,
          marginRight: -64
        })
        expect(style).to.deep.equal(computed)
      })
    })
  })

  describe('media queries', () => {
    if (typeof window === 'undefined') {
      return false
    }

    class Root extends React.Component {
      render () { return <div {...this.props} /> }
    }

    it('should be in a windowed environment', () => {
      expect(window).to.exist
    })

    context('when below sm breakpoint', () => {
      let root, flex

      if (window.matchMedia('(min-width: 32em)').matches) {
        return false
      }

      context('with no props', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).to.equal('flex')
        })
      })

      context('with sm set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex sm />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).to.equal('block')
        })
      })

      context('with md set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex md />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).to.equal('block')
        })
      })

      context('with lg set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex lg />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).to.equal('block')
        })
      })
    })

    context('when between sm and md breakpoints', () => {
      let root, flex

      if (!window.matchMedia('(min-width: 32em) and (max-width: 48em)').matches) {
        return false
      }

      context('with no props', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).to.equal('flex')
        })
      })

      context('with sm set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex sm />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).to.equal('flex')
        })
      })

      context('with md set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex md />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).to.equal('block')
        })
      })

      context('with lg set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex lg />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).to.equal('block')
        })
      })
    })

    context('when between md and lg breakpoints', () => {
      let root, flex

      if (!window.matchMedia('(min-width: 48em) and (max-width: 64em)').matches) {
        return false
      }

      context('with no props', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).to.equal('flex')
        })
      })

      context('with sm set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex sm />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).to.equal('flex')
        })
      })

      context('with md set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex md />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).to.equal('flex')
        })
      })

      context('with lg set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex lg />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).to.equal('block')
        })
      })
    })

    context('when above lg breakpoints', () => {
      let root, flex

      if (!window.matchMedia('(min-width: 64em)').matches) {
        return false
      }

      context('with no props', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).to.equal('flex')
        })
      })

      context('with sm set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex sm />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).to.equal('flex')
        })
      })

      context('with md set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex md />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).to.equal('flex')
        })
      })

      context('with lg set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex lg />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).to.equal('flex')
        })
      })
    })
  })
})