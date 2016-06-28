﻿///////////////////////////////////////////////////////////////////////////////
// Copyright (c) ENikS.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0  ( the  "License" );  you may 
// not use this file except in compliance with the License.  You may  obtain  a 
// copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required  by  applicable  law  or  agreed  to  in  writing,  software 
// distributed under the License is distributed on an "AS  IS"  BASIS,  WITHOUT
// WARRANTIES OR CONDITIONS  OF  ANY  KIND, either express or implied.  See the 
// License for the specific  language  governing  permissions  and  limitations 
// under the License.

import {assert} from "chai";
import * as Enumerable from "../src/linq";
import defaultmethod from "../src/linq";

var simpleArray = [0, 1, 2];

describe('Module Interface -', function () {

    it('All methods are supported', function () {
        assert.isNotNull(Enumerable.from(simpleArray));
        assert.isNotNull(Enumerable.From(simpleArray));
        assert.isNotNull(Enumerable.asEnumerable(simpleArray));
        assert.isNotNull(Enumerable.Range<Number>(0, 1));
        assert.isNotNull(Enumerable.Repeat<Number>(0, 1));
    });

    it('Module\'s default', function () {
        assert.isNotNull(defaultmethod(simpleArray));
    });


    it('Range()', function () {
        var array = Enumerable.Range(1, 100).ToArray();
        assert.equal(array.length, 100);
        for (var i = 0; i < array.length; i++)
            assert.equal(array[i], i + 1);
    });

    it('Repeat()', function () {
        var iterable = Enumerable.Repeat("Test", 5);
        var iterator = iterable[Symbol.iterator]()

        assert.equal("Test", iterator.next().value);
        assert.equal("Test", iterator.next().value);
        assert.equal("Test", iterator.next().value);
        assert.equal("Test", iterator.next().value);
        assert.equal("Test", iterator.next().value);
        assert.isTrue(iterator.next().done);
    });

});